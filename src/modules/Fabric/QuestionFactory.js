const QUESTION_TYPES = require("~/__constants__/questionTypes");
const {
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
  DragAndDropQuestion,
  FreeAnswerQuestion,
} = require("~/domains/Question");

/**
 * A factory class for creating different question objects based on their type.
 */
class QuestionFactory {
  /**
   * Creates a new question object of the specified type.
   *
   * @param {string} type - The type of the question to create. Valid types are defined in `QUESTION_TYPES`.
   * @param {object} data - Data used to construct the question object. The required properties vary based on the question type.
   * @throws {Error} If an invalid question type is provided.
   * @returns {Question} A question object of the specified type.
   */
  static createQuestion(type, data) {
    switch (type) {
      case QUESTION_TYPES.SINGLE:
        return new SingleChoiceQuestion(data);
      case QUESTION_TYPES.MULTIPLE:
        return new MultipleChoiceQuestion(data);
      case QUESTION_TYPES.DRAG_AND_DROP:
        return new DragAndDropQuestion(data);
      case QUESTION_TYPES.FREE_ANSWER:
        return new FreeAnswerQuestion(data);

      default:
        throw new Error("Invalid question type");
    }
  }
}

module.exports = QuestionFactory;
