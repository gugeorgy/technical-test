// /api/get-player-info/route.ts

import { NextResponse } from "next/server";

// Base URL for the API, fetched from environment variables
const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches an access token from the local API.
 *
 * @returns {Promise<string>} - The fetched token.
 */
async function fetchToken(): Promise<string> {
  const resToken = await fetch("http://localhost:3000/api/getAccessToken", {
    method: 'POST',
  });
  const { token } = await resToken.json();

  return token;
}

/**
 * Fetches player data from the API using the provided player ID.
 *
 * @param {string} playerId - The ID of the player.
 * @param {string} token - The access token.
 * @returns {Promise<any>} - The fetched player data.
 */
async function fetchPlayerData(playerId: string, token: string): Promise<any> {
  const resData = await fetch(`${API_BASE_URL}/player?id=${playerId}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  const { player } = await resData.json();

  return player;
}

/**
 * POST is an asynchronous function that fetches player data from the API.
 *
 * @param {Request} request - The request object.
 * @returns {Promise<NextResponse>} - The response from the API. If successful, it returns the player data. If an error occurs, it returns the error.
 */
export async function POST(request: Request) {
  try {
    const { playerId } = await request.json();

    const token = await fetchToken();
    const player = await fetchPlayerData(playerId, token);

    return NextResponse.json({ ...player, id: playerId });
  } catch (error) {
    return NextResponse.json({ error })
  }
}
