const PaymentProcessor = require("~/domains/Payment/PaymentProcessor");
const { PAYMENT_TYPES } = require("~/__constants__");

/**
 * Inherits from the base PaymentProcessor class and represents a GooglePay payment processor.
 */
class GooglePay extends PaymentProcessor {
  /**
   * Creates a new GooglePay processor instance.
   *
   * @param {number} balance - The initial balance available in the GooglePay account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.GOOGLE_PAY;
    this.balance = balance;
  }
}

module.exports = GooglePay;
