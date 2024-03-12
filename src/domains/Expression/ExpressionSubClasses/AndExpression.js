const { BinaryExpression } = require("~/domains/Expression");

/**
 * Represents an AND expression in learning path conditions (both sides must be true).
 */
class AndExpression extends BinaryExpression {
  /**
   * Evaluates the AND expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} True if both left and right operands evaluate to true, false otherwise.
   */
  evaluate(context) {
    return this.left.evaluate(context) && this.right.evaluate(context);
  }
}

module.exports = AndExpression;
