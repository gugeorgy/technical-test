import { NextResponse } from "next/server";

/**
 * API_BASE_URL represents the base URL for the API.
 * It is fetched from the environment variables.
 */
const API_BASE_URL = process.env.API_BASE_URL;

/**
 * cachedToken is a variable that stores the token used for API requests.
 * It is initially set to null and gets updated once the token is fetched.
 */
let cachedToken: string | null = null;

/**
 * Fetches a new token using the client ID, client secret, and grant type from the environment variables.
 * The new token is then cached for future use.
 *
 * @throws Will throw an error if the environment variables CLIENT_ID, CLIENT_SECRET, and GRANT_TYPE are not set.
 * @returns {Promise<string>} - The fetched token.
 */
async function fetchToken(): Promise<string> {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const grantType = process.env.GRANT_TYPE;

  if (!clientId || !clientSecret || !grantType) {
    throw new Error('Environment variables CLIENT_ID, CLIENT_SECRET, and GRANT_TYPE must be set');
  }

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('grant_type', grantType);

  const resToken = await fetch(`${API_BASE_URL}/access-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  const { access_token } = await resToken.json();

  return access_token;
}

/**
 * POST is an asynchronous function that sends a POST request to the API.
 * If a cached token is not available, it fetches a new one.
 *
 * @param {Request} _request - The request object.
 * @returns {Promise<NextResponse>} - The response from the API. If successful, it returns the token. If an error occurs, it returns the error.
 */
export async function POST(_request: Request) {
  try {
    if (!cachedToken) {
      cachedToken = await fetchToken();
    }

    return NextResponse.json({ token: cachedToken })
  } catch (error) {
    console.log("first", error)
    return NextResponse.json({ error })
  }
}
