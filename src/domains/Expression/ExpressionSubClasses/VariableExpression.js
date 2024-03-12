const Expression = require("~/domains/Expression/Expression");
/**
 * Represents a variable reference expression used in learning path conditions.
 * This expression retrieves a value from the context object based on a variable name.
 */
class VariableExpression extends Expression {
  /**
   * The name of the variable to be retrieved from the context.
   * @type {string}
   */
  variable;
  /**
   * Creates a new VariableExpression instance.
   *
   * @param {string} variableName The name of the variable to be retrieved.
   */
  constructor(variableName) {
    super();
    this.variableName = variableName;
  }

  /**
   * Evaluates the variable expression by retrieving the value from the context.
   *
   * @param {object} context The context object containing user data.
   * @returns {any} The value of the variable from the context (or false if the variable is missing).
   */
  evaluate(context) {
    return context[this.variableName] || false; // Handle missing variables as false
  }
}

module.exports = VariableExpression;
