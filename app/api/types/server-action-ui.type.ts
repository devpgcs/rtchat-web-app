/**
 * The UI representation of a server action which can be either the API response or an error message.
 *
 * @example
 *
 * ```ts
 * const response = await login(payload);
 *
 * if ("errorMessage" in response) {
 *   console.log(response.errorMessage); // "{field} is required"
 * } else {
 *   console.log(response.token); // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }
 * ```
 */
type ServerActionUI<ApiResponse> = ApiResponse | { errorMessage: string };
