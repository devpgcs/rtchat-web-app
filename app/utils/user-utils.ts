"use server";

import { cookies } from "next/headers";
import { User } from "../api/models/user.model";
import { USER_COOKIE } from "../api/constants/cookies";

/**
 * Get the user from the server cookies.
 *
 * @returns {User | null} The user from the server cookies or null.
 */
export async function getUser(): Promise<User | null> {
  const storedCookies = cookies();
  const serializedUser = storedCookies.get(USER_COOKIE)?.value ?? "null";

  return JSON.parse(serializedUser);
}

/**
 * Saves the user in the server cookies.
 *
 * @param {User} user The user to save.
 */
export async function saveUser(user: User): Promise<void> {
  const storedCookies = cookies();

  storedCookies.set(USER_COOKIE, JSON.stringify(user), { httpOnly: true });
}

/**
 * Deletes the user from the server cookies.
 *
 * @returns {void}
 */
export async function deleteUser(): Promise<void> {
  const storedCookies = cookies();

  storedCookies.delete(USER_COOKIE);
}
