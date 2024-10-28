import { isAxiosError } from "axios";

interface ApiError {
  /**
   * The error message from the API.
   * @example "{field} is required"
   */
  message: string | string[];
  /**
   * The human-readable error message.
   * @example "Bad Request"
   */
  error: string;
  /**
   * The status code of the error.
   * @example 400
   */
  statusCode: number;
}

/**
 * Gets the error message from an Axios error and serializes it for UX uses.
 *
 * @param {unknown} error The error object.
 * @returns {string} The error message to be displayed to the user.
 */
export function getErrorMessage(error: unknown) {
  if (isAxiosError<ApiError>(error)) {
    const response = error.response?.data;

    if (response) {
      const message = Array.isArray(response.message) ? response.message[0] : response.message;
      return message;
    }
  }

  // TODO: Track in Sentry or other error tracking service
  console.log(error);
  return "An unexpected error occurred. Please contact support.";
}
