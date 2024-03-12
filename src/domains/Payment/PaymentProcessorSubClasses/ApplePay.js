const PaymentProcessor = require("~/domains/Payment/PaymentProcessor");
const { PAYMENT_TYPES } = require("~/__constants__");

/**
 * Inherits from the base PaymentProcessor class and represents an Apple Pay payment processor.
 */
class ApplePay extends PaymentProcessor {
  /**
   * Creates a new Apple Pay processor instance.
   *
   * @param {number} balance - The initial balance available in the Apple Pay account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.APPLE_PAY;
    this.balance = balance;
  }
}

module.exports = ApplePay;
