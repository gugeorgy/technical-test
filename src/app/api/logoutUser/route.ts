import { NextRequest, NextResponse } from "next/server";

/**
 * Creates a cookie to log out the user.
 *
 * @returns {string} The created cookie.
 */
function createLogoutCookie(): string {
  return `playerId=; Max-Age=0; Path=/; HttpOnly`;
}

/**
 * Handles a GET request to log out a user.
 *
 * @param {NextRequest} request - The request object.
 * @returns {Promise<NextResponse>} The response from the API. If successful, it returns a success message. If an error occurs, it returns the error.
 */
export async function GET(request: NextRequest) {
  try {
    const cookie = createLogoutCookie();
    return NextResponse.json({ success: true }, { headers: { 'Set-Cookie': cookie } });
  } catch (error) {
    return NextResponse.json({ error })
  }
}
