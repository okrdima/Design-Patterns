// Represents a literal value expression (e.g., a number or boolean)
const Expression = require("~/domains/Expression/Expression");

/**
 * Represents a literal value expression used in learning path conditions.
 */
class LiteralExpression extends Expression {
  /**
   * The literal value.
   * @type {any}
   */
  value = undefined;

  /**
   * Creates a new LiteralExpression instance.
   *
   * @param {any} value The literal value.
   */
  constructor(value) {
    super();
    this.value = value;
  }

  /**
   * Evaluates the literal expression (simply returns the value).
   *
   * @param {object} context The context object (unused for literal expressions).
   * @returns {any} The literal value.
   */
  evaluate(context) {
    return this.value;
  }
}

module.exports = LiteralExpression;
