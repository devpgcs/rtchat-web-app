"use server";

import { getErrorMessage } from "@devpgcs/app/utils/api-utils";
import { deleteToken } from "@devpgcs/app/utils/token-utils";
import { deleteUser } from "@devpgcs/app/utils/user-utils";

import { ServerActionUI } from "../../types/server-action-ui.type";

/**
 * Log the user out by deleting the token cookie and redirecting to the login page.
 */
export default async function logout(): Promise<ServerActionUI<void>> {
  try {
    await deleteToken();
    await deleteUser();
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return { errorMessage };
  }
}
