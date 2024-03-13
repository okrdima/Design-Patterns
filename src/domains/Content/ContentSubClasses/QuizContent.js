const Content = require("~/domains/Content/Content");
const { CONTENT_TYPES } = require("~/__constants__");

/**
 *  A concrete subclass of Content representing a quiz content piece.
 */
class QuizContent extends Content {
  /**
   * Creates a new QuizContent object.
   *
   * @param {string} title - The title of the quiz.
   * @param {array} questions - An array of question objects with specific structure
   *                             (replace 'array' with the actual question structure).
   */
  constructor(title, questions) {
    super(title, CONTENT_TYPES.QUIZ, questions);
  }
}

module.exports = QuizContent;
