const LessonState = require("~/domains/Lesson/LessonState");
const { LESSON_STATES } = require("~/__constants__");
const CompletedState = require("./CompletedState");
/**
 * Represents the state where the user is actively working on the lesson.
 */
class InProgressState extends LessonState {
  constructor() {
    super(LESSON_STATES.IN_PROGRESS, CompletedState);
  }
}

module.exports = InProgressState;
