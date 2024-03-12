// Represents an OR expression in a learning path condition (either side can be true)
const { BinaryExpression } = require("~/domains/Expression");

/**
 * Represents an OR expression in learning path conditions (either side can be true).
 */
class OrExpression extends BinaryExpression {
  /**
   * Evaluates the OR expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} True if either left or right operand evaluates to true, false otherwise.
   */
  evaluate(context) {
    return this.left.evaluate(context) || this.right.evaluate(context);
  }
}

module.exports = OrExpression;
