const PaymentProcessor = require("~/domains/Payment/PaymentProcessor");
const { PAYMENT_TYPES } = require("~/__constants__");

/**
 * Inherits from the base PaymentProcessor class and represents a Mastercard payment processor.
 */
class MasterCard extends PaymentProcessor {
  /**
   * Creates a new MasterCard processor instance.
   *
   * @param {number} balance - The initial balance available in the Mastercard account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.MASTER_CARD;
    this.balance = balance;
  }
}

module.exports = MasterCard;
