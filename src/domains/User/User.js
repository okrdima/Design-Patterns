const uuid = require("uuid");
const { PAYMENT_TYPES } = require("~/__constants__");

/**
 * Represents a user object within the online course platform.
 */
class User {
  /**
   * Creates a new User object.
   *
   * @param {string} userId - The unique identifier for the user (optional, system generated).
   * @param {string} username - The username the user will use for login.
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password (hashed for security).
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   * @param {('ADMINISTRATOR'|'TEACHER'|'STUDENT')} role - The user's role within the platform (e.g., "Student", "Teacher", "Administrator").
   * @param {PAYMENT_TYPES} balance - The user's current balance (optional).
   * @param {Date} createdAt - The date and time the user was created (optional).
   */
  constructor(
    userId,
    username,
    email,
    password,
    firstName,
    lastName,
    role,
    balance = {},
    createdAt = new Date(),
  ) {
    this._id = userId || uuid.v4(); // Generate random ID if not provided
    this.username = username;
    this.email = email;
    this.password = password; // (assuming password is already hashed)
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.balance = {
      [PAYMENT_TYPES.MASTER_CARD]: balance?.[PAYMENT_TYPES.MASTER_CARD] || 0,
      [PAYMENT_TYPES.PAY_PAL]: balance?.[PAYMENT_TYPES.PAY_PAL] || 0,
      [PAYMENT_TYPES.APPLE_PAY]: balance?.[PAYMENT_TYPES.APPLE_PAY] || 0,
      [PAYMENT_TYPES.GOOGLE_PAY]: balance?.[PAYMENT_TYPES.GOOGLE_PAY] || 0,
    };
    this._createdAt = createdAt;
  }

  /**
   * Returns the user's current balance.
   * @param {('MASTER_CARD'|'PAY_PAL'|'APPLE_PAY'|'GOOGLE_PAY')|undefined} paymentType - The user's role within the platform (e.g., "Student", "Teacher", "Administrator").
   * @returns {number} - The user's balance.
   */
  getBalance(paymentType) {
    if (!paymentType)
      return Object.keys(this.balance).reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      );

    return this.balance?.[paymentType] || 0;
  }
}

module.exports = User;
