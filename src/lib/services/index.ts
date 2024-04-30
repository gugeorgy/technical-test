/**
 * `getPlayerInfo` is an asynchronous function that fetches player information.
 *
 * @param {string | undefined} playerId - The ID of the player to fetch information for.
 * @returns {Promise<any>} The player information, or undefined if the playerId is undefined.
 */
const getPlayerInfo = async (playerId: string | undefined) => {
  if (typeof playerId === 'undefined' || playerId === 'undefined') {
    return undefined;
  }

  const res = await fetch('http://localhost:3000/api/getPlayerInfo', {
    method: 'POST',
    body: JSON.stringify({ playerId }),
  });

  const data = await res.json();
  return data;
};

/**
 * `logoutUser` is an asynchronous function that logs out the current user.
 * If the logout is successful, it reloads the page.
 *
 * @returns {Promise<void>}
 */
const logoutUser = async () => {
  const response = await fetch('/api/logoutUser');
  const { success } = await response.json();

  if (success) {
    window.location.reload();
  }
};

export { getPlayerInfo, logoutUser };
