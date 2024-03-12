const LessonState = require("~/domains/Lesson/LessonState");
const { LESSON_STATES } = require("~/__constants__");

/**
 * Represents the state where the user has completed the lesson.
 */
class CompletedState extends LessonState {
  constructor() {
    super(LESSON_STATES.COMPLETED, CompletedState); // Stay in Completed state
  }
}

module.exports = CompletedState;
