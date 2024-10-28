"use server";

import { getErrorMessage } from "@devpgcs/app/utils/api-utils";
import { getToken } from "@devpgcs/app/utils/token-utils";
import { saveUser } from "@devpgcs/app/utils/user-utils";

import { createPrivateAxios, endpoints } from "../..";

import { User } from "../../models/user.model";
import { ServerActionUI } from "../../types/server-action-ui.type";

/**
 * Retrieves the current user using the stored cookie.
 * @returns {Promise<ServerActionUI<User>>} The user or an error message.
 */
export default async function getMe(): Promise<ServerActionUI<User>> {
  try {
    const token = await getToken();

    const { data: user } = await createPrivateAxios(
      token,
      //TODO: Provider the right session expired callback
      async () => {}
    ).get<User>(endpoints.user.me);

    saveUser(user);

    return user;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    return { errorMessage };
  }
}
