// Represents a comparison expression that evaluates based on an operator and a value
const Expression = require("~/domains/Expression/Expression");

/**
 * Represents a comparison expression used in learning path conditions.
 * This expression compares a variable value with an expected value using an operator.
 */
class ComparisonExpression extends Expression {
  /**
   * The comparison operator (e.g., ===, !==, >=, <=, >, <).
   * @type {string}
   */
  operator;

  /**
   * The expected value for the comparison.
   * @type {any}
   */
  expectedValue;

  /**
   * Creates a new ComparisonExpression instance.
   *
   * @param {string} operator The comparison operator.
   * @param {any} expectedValue The expected value for the comparison.
   */
  constructor(operator, expectedValue) {
    super();
    this.operator = operator;
    this.expectedValue = expectedValue;
  }

  /**
   * Evaluates the comparison expression based on the provided context.
   *
   * @param {object} context The context object containing user data.
   * @returns {boolean} The comparison result (true if the condition holds, false otherwise).
   */
  evaluate(context) {
    const variableValue = context[this.variableName] || 0; // Handle missing variables with default (e.g., 0 for numbers)
    switch (this.operator) {
      case "===":
        return variableValue === this.expectedValue;
      case "!==":
        return variableValue !== this.expectedValue;
      case ">=":
        return variableValue >= this.expectedValue;
      case "<=":
        return variableValue <= this.expectedValue;
      case ">":
        return variableValue > this.expectedValue;
      case "<":
        return variableValue < this.expectedValue;
      default:
        throw new Error(`Unsupported comparison operator: ${this.operator}`);
    }
  }
}

module.exports = ComparisonExpression;
