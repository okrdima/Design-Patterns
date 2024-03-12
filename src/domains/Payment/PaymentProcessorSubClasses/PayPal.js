const PaymentProcessor = require("~/domains/Payment/PaymentProcessor");
const { PAYMENT_TYPES } = require("~/__constants__");

/**
 * Inherits from the base PaymentProcessor class and represents a PayPal payment processor.
 */
class PayPal extends PaymentProcessor {
  /**
   * Creates a new PayPal processor instance.
   *
   * @param {number} balance - The initial balance available in the PayPal account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.PAY_PAL;
    this.balance = balance;
  }
}

module.exports = PayPal;
