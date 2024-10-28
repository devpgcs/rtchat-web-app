import { User } from "@devpgcs/app/api/models/user.model";

export interface AuthContextValue {
  /**
   * The current authenticated user.
   */
  user: User | null;
  /**
   * Callback to login the user with the given username and password.
   *
   * @param {string} username The username of the user.
   * @param {string} password The password of the user.
   * @returns {Promise<void>} A promise that resolves when the user is logged in.
   */
  login: (username: string, password: string) => Promise<void>;
  /**
   * Callback to logout the user.
   *
   * @returns {Promise<void>} A promise that resolves when the user is logged out.
   */
  logout: () => Promise<void>;
  /**
   * The callback to register a new user with the given username, password, and phone number.
   *
   * @param {string} username The username of the user.
   * @param {string} password The password of the user.
   * @param {string} phoneNumber The phone number of the user.
   * @returns {Promise<void>} A promise that resolves when the user is registered.
   */
  register: (username: string, password: string, phoneNumber: string) => Promise<void>;
}
