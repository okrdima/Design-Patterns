const { Lesson } = require("~/domains/Lesson");
const { NotStartedState } = require("~/domains/Lesson/LessonStatesSubClasses");
const testInEnv = () => {
  const lesson = new Lesson(
    "Introduction to JavaScript",
    1,
    "Lesson content...",
  );

  console.log(lesson.getState().getStateLabel()); // Output: "Not Started"

  lesson.nextState();
  console.log(lesson.getState().getStateLabel()); // Output: "In Progress"

  lesson.nextState();
  console.log(lesson.getState().getStateLabel()); // Output: "In Progress"

  lesson.setState(new NotStartedState());
  console.log(lesson.getState().getStateLabel()); // Output: "In Progress"

  lesson.completeLesson();
  console.log(lesson.getState().getStateLabel()); // Output: "Completed"
};

module.exports = testInEnv;
