import { userSignInSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";

/**
 * The base URL for the API, fetched from the environment variables.
 */
const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches an access token from the local API.
 *
 * @returns {Promise<string>} The fetched token.
 */
async function fetchToken(): Promise<string> {
  const resToken = await fetch("http://localhost:3000/api/getAccessToken", {
    method: 'POST',
  });
  const { token } = await resToken.json();

  return token;
}

/**
 * Validates the request body using the userSignInSchema.
 *
 * @param {unknown} body - The request body.
 * @returns {object} The validated data and any errors.
 */
function validateRequestBody(body: unknown) {
  const result = userSignInSchema.safeParse(body);

  let zodErrors = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return { data: result.data, errors: zodErrors };
}

/**
 * Logs in a user using the API.
 *
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @param {string} token - The access token.
 * @returns {Promise<any>} The response from the API.
 */
async function loginUser(username: string, password: string, token: string): Promise<any> {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  const resLogin = await fetch(`${API_BASE_URL}/player/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    },
    body: params,
  });

  const { player } = await resLogin.json();

  return player;
}

/**
 * Handles a POST request to log in a user.
 *
 * @param {Request} request - The request object, which should contain the user's username and password in the body.
 * @returns {Promise<NextResponse>} The response from the API. If successful, it returns the user data. If an error occurs, it returns the error.
 */
export async function POST(request: Request) {
  try {
    const token = await fetchToken();

    const body: unknown = await request.json();
    const { data, errors } = validateRequestBody(body);


    if (errors && Object.keys(errors).length > 0) {
      return NextResponse.json({ errors });
    }

    const { username, password } = data!;

    const player = await loginUser(username, password, token);

    if (player) {
      const cookie = `playerId=${player.id}; Max-Age=${60 * 60}; Path=/; HttpOnly; Secure; SameSite=Strict`;
      return NextResponse.json({ success: true }, { headers: { 'Set-Cookie': cookie } })
    }

    return NextResponse.json({ success: false })

  } catch (error) {
    console.log("Error :: getToken", error);
    return NextResponse.json({ error })
  }
}
