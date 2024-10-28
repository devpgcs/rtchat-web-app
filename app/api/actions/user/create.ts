"use server";

import { getErrorMessage } from "@devpgcs/app/utils/api-utils";

import { endpoints, publicAxios } from "../..";

import { User } from "../../models/user.model";
import { ServerActionUI } from "../../types/server-action-ui.type";

import { CreateUserPayload } from "./interfaces/create-user-payload.interface";

/**
 * Creates a new user by calling the User API and returning the created user.
 *
 * @param {CreateUserPayload} payload The data to create a user.
 * @returns {Promise<ServerActionUI<User>>} The created user or an error message.
 */
export default async function create(payload: CreateUserPayload): Promise<ServerActionUI<User>> {
  try {
    const { data: user } = await publicAxios.post<User>(endpoints.user.base, payload);

    return user;
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    // Return the error message if the register failed
    return { errorMessage };
  }
}
