const {
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
  FreeAnswerQuestion,
  DragAndDropQuestion,
} = require("~/domains/Question/TypeQuestions");
const { QUESTION_TYPES } = require("~/__constants__");

/**
 * A factory for creating SingleChoiceQuestion objects.
 */
class SingleChoiceQuestionFactory {
  /**
   * Creates a new SingleChoiceQuestion object.
   *
   * @param {string} type - The type of question to create (should always be QUESTION_TYPES.SINGLE).
   * @param {object} data - Data used to construct the question object.
   * @throws {Error} If an invalid question type is provided.
   * @returns {SingleChoiceQuestion} A newly created SingleChoiceQuestion object.
   */
  createQuestion(type, data) {
    if (type === QUESTION_TYPES.SINGLE) {
      return new SingleChoiceQuestion(data);
    } else {
      throw new Error("Invalid question type for this factory");
    }
  }
}

/**
 * A factory for creating MultipleChoiceQuestion objects.
 */
class MultipleChoiceQuestionFactory {
  /**
   * Creates a new MultipleChoiceQuestion object.
   *
   * @param {string} type - The type of question to create (should always be QUESTION_TYPES.MULTIPLE).
   * @param {object} data - Data used to construct the question object.
   * @throws {Error} If an invalid question type is provided.
   * @returns {MultipleChoiceQuestion} A newly created MultipleChoiceQuestion object.
   */
  createQuestion(type, data) {
    if (type === QUESTION_TYPES.MULTIPLE) {
      return new MultipleChoiceQuestion(data);
    } else {
      throw new Error("Invalid question type for this factory");
    }
  }
}

/**
 * A factory for creating FreeAnswerQuestion objects.
 */
class FreeAnswerQuestionFactory {
  /**
   * Creates a new FreeAnswerQuestion object.
   *
   * @param {string} type - The type of question to create (should always be QUESTION_TYPES.FREE_ANSWER).
   * @param {object} data - Data used to construct the question object.
   * @throws {Error} If an invalid question type is provided.
   * @returns {FreeAnswerQuestion} A newly created FreeAnswerQuestion object.
   */
  createQuestion(type, data) {
    if (type === QUESTION_TYPES.FREE_ANSWER) {
      return new FreeAnswerQuestion(data);
    } else {
      throw new Error("Invalid question type for this factory");
    }
  }
}

/**
 * A factory for creating DragAndDropQuestion objects.
 */
class DragAndDropQuestionFactory {
  /**
   * Creates a new DragAndDropQuestion object.
   *
   * @param {string} type - The type of question to create (should always be QUESTION_TYPES.DRAG_AND_DROP).
   * @param {object} data - Data used to construct the question object.
   * @throws {Error} If an invalid question type is provided.
   * @returns {DragAndDropQuestion} A newly created DragAndDropQuestion object.
   */
  createQuestion(type, data) {
    if (type === QUESTION_TYPES.DRAG_AND_DROP) {
      return new DragAndDropQuestion(data);
    } else {
      throw new Error("Invalid question type for this factory");
    }
  }
}

/**
 * A manager class that handles creating and retrieving specific question factories based on question types.
 */
class QuestionFactoryManager {
  /**
   * Gets the appropriate question factory for the given question type.
   *
   * @param {string} type - The type of question factory to retrieve.
   * @throws {Error} If an unsupported question type is provided.
   * @returns {SingleChoiceQuestionFactory|MultipleChoiceQuestionFactory|FreeAnswerQuestionFactory|DragAndDropQuestionFactory} The question factory for the specified type.
   */
  static getFactory(type) {
    switch (type) {
      case QUESTION_TYPES.SINGLE:
        return new SingleChoiceQuestionFactory();
      case QUESTION_TYPES.MULTIPLE:
        return new MultipleChoiceQuestionFactory();

      case QUESTION_TYPES.FREE_ANSWER:
        return new FreeAnswerQuestionFactory();
      case QUESTION_TYPES.DRAG_AND_DROP:
        return new DragAndDropQuestionFactory();
      default:
        throw new Error("Unsupported question type");
    }
  }

  /**
   * Creates a question object of the specified type using the appropriate factory.
   *
   * @param {string} type - The type of question to create.
   * @param {object} data - Data used to construct the question object.
   * @throws {Error} If an invalid question type is provided.
   * @returns {Question} A question object of the specified type.
   */
  static createQuestion(type, data) {
    const factory = this.getFactory(type);
    return factory.createQuestion(type, data);
  }
}

module.exports = {
  QuestionFactoryManager,
  SingleChoiceQuestionFactory,
  MultipleChoiceQuestionFactory,
  FreeAnswerQuestionFactory,
  DragAndDropQuestionFactory,
};
