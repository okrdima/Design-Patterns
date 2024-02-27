/**
 * Abstract Class Question.
 *
 * @class Question
 */
class Question {
  constructor(type) {
    if (this.constructor === Question) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.type = type;
  }

  getQuestion() {}

  getAnswerKey() {} // Answer format varies based on question type.
}

module.exports = Question;
