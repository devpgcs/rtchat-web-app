import axios, { AxiosInstance } from "axios";

export const publicAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * Create an Axios instance with the provided token and interceptors to handle expired sessions
 * and be able to make requests to the private API through the Next Server Actions.
 *
 * @param {string} token The token to be used in the Authorization header.
 * @param {Function} expiredSessionCb Callback to be executed when the session is expired.
 * @param {Function} interceptorErrorCb Callback to be executed when an error which receives an error object as its only argument.
 * @returns {AxiosInstance} The Axios instance with the provided configuration.
 */
export const createPrivateAxios = (
  token: string,
  expiredSessionCb: () => Promise<void>,
  interceptorErrorCb?: (error: unknown) => void
): AxiosInstance => {
  const privateAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });

  privateAxios.interceptors.response.use(async (response) => {
    const isExpiredSession = response.status === 401;

    if (isExpiredSession) {
      await expiredSessionCb();
    }

    return response;
  }, interceptorErrorCb);

  return privateAxios;
};

/**
 * API endpoints following the folder-like structure.
 *
 * @example
 *
 * ```ts
 * import { endpoints } from "./api";
 *
 * const { data: loginResponse } = await publicAxios.post<LoginResponse>(
 *    endpoints.auth.login,
 *    {
 *      username: "amazingchat",
 *      password: "Test1234!",
 *    }
 * );
 *
 * console.log(loginResponse.token); // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c...."
 * ```
 */
export const endpoints = {
  auth: {
    login: "/auth/login",
  },
  chat: {
    base: "/chat",
    single: (chatId: string) => `/chat/${chatId}`,
    message: {
      base: (chatId: string) => `/chat/${chatId}/message`,
      single: (chatId: string, messageId: string) => `chat/${chatId}/message/${messageId}`,
    },
  },
  user: {
    base: "/user",
    me: "/user/me",
  },
};
