const LessonState = require("~/domains/Lesson/LessonState");
const { LESSON_STATES } = require("~/__constants__");
const InProgressState = require("./InProgressState");

/**
 * Represents the state where the user hasn't started the lesson.
 */
class NotStartedState extends LessonState {
  constructor() {
    super(LESSON_STATES.NOT_STARTED, InProgressState);
  }
}

module.exports = NotStartedState;
