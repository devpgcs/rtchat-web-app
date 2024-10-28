export interface CreateUserPayload {
  /**
   * The username of the user
   * @example 'amazingchat'
   */
  username: string;
  /**
   * The password of the user
   * @example 'Test1234!'
   * @minLength 8
   * @maxLength 32
   */
  password: string;
  /**
   * The phone number of the user
   * @example '+57 123 456 7890'
   */
  phoneNumber: string;
}
