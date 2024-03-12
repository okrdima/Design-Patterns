const { Lesson } = require("~/domains/Lesson");
const {
  VideoLectureStrategy,
  InteractiveExerciseStrategy,
  TextContentStrategy,
} = require("~/domains/Lesson/DeliverySubClasses");
const uuid = require("uuid");

const testInEnv = () => {
  /**
   * Function to display a lesson based on its assigned delivery strategy.
   *
   * @param {Lesson} lesson - The lesson object to be displayed.
   */
  function displayLesson(lesson) {
    lesson.deliveryStrategy.deliverLesson();
  }

  // Example usage
  const videoLectureStrategy = new VideoLectureStrategy();
  const interactiveExerciseStrategy = new InteractiveExerciseStrategy();
  const textContentStrategy = new TextContentStrategy();

  const lesson1 = new Lesson(
    "Introduction",
    1,
    "Introduction text",
    null,
    uuid.v4(),
    videoLectureStrategy,
  );

  const lesson2 = new Lesson(
    "Interactive Activity",
    2,
    "",
    null,
    uuid.v4(),
    interactiveExerciseStrategy,
  );

  const lesson3 = new Lesson(
    "Conclusion",
    3,
    "",
    null,
    uuid.v4(),
    textContentStrategy,
  );

  displayLesson(lesson1); // Calls VideoLectureStrategy.deliverLesson()
  displayLesson(lesson2); // Calls InteractiveExerciseStrategy.deliverLesson()
  displayLesson(lesson3); // Calls TextContentStrategy.deliverLesson() (assuming lessonContent is set)
};

module.exports = testInEnv;
