"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { TOKEN_COOKIE } from "../../constants/cookies";

/**
 * Log the user out by deleting the token cookie and redirecting to the login page.
 */
export default async function logout() {
  const storedCookies = cookies();

  // Delete the token cookie so that the protected routes are no longer accessible
  storedCookies.delete(TOKEN_COOKIE);

  // And then, redirect to the login page
  redirect("/auth/login");
}
