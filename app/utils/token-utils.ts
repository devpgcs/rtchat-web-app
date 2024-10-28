import { cookies } from "next/headers";

import { TOKEN_COOKIE } from "../api/constants/cookies";

/**
 * Get the token from the server cookies.
 *
 * @returns {string} The token from the server cookies or an empty string.
 */
export async function getToken(): Promise<string> {
  const storedCookies = cookies();

  return storedCookies.get(TOKEN_COOKIE)?.value ?? "";
}

/**
 * Saves the token in the server cookies.
 *
 * @param {string} token The token to save.
 */
export async function saveToken(token: string): Promise<void> {
  const storedCookies = cookies();

  storedCookies.set(TOKEN_COOKIE, token, { httpOnly: true });
}

/**
 * Deletes the token from the server cookies.
 *
 * @returns {void}
 */
export async function deleteToken(): Promise<void> {
  const storedCookies = cookies();

  storedCookies.delete(TOKEN_COOKIE);
}
