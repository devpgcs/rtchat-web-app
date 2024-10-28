"use server";

import { saveToken } from "@devpgcs/app/utils/token-utils";
import { getErrorMessage } from "@devpgcs/app/utils/api-utils";

import { endpoints, publicAxios } from "../..";

import { ServerActionUI } from "../../types/server-action-ui.type";

import { LoginPayload } from "./interfaces/login-payload.interface";
import { LoginResponse } from "./interfaces/login-response.interface";

/**
 * Log the user in by calling the login API and saving the token in the server cookies.
 *
 * @param {LoginPayload} payload The login payload.
 * @returns {Promise<ServerActionUI<LoginResponse>>} The login response or an error message.
 */
export default async function login(payload: LoginPayload): Promise<ServerActionUI<LoginResponse>> {
  try {
    const { data: loginResponse } = await publicAxios.post<LoginResponse>(endpoints.auth.login, payload);

    // Save the token in the server cookies
    await saveToken(loginResponse.token);

    return loginResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    // Return the error message if the login failed
    return { errorMessage };
  }
}
