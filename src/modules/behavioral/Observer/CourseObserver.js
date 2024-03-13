const { CourseBuilder, CoursePrototype } = require("~/domains/Course");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const { Lesson } = require("~/domains/Lesson");
const { EmailNotification } = require("~/domains/Notification");
const testInEnv = () => {
  const lessonTemplates1 = [
    new Lesson("Introduction", 1),
    new Lesson("Lesson 1 Content", 2),
    new Lesson("Conclusion", 3),
  ];
  const prototype1 = new CoursePrototype(
    "Basic Course",
    "A fundamental course...",
    "instructor123",
    COURSE_CATEGORY_TYPES.TECHNOLOGY,
    lessonTemplates1,
  );

  // Example usage: Build a course with some functionalities
  const courseBuilder = new CourseBuilder(prototype1);
  const emailNotifier = new EmailNotification();

  courseBuilder
    .addLesson("Introduction", 1)
    .addLesson("Lesson 1 Content", 2, "This is the lesson content.")
    .linkContentAsset(1, " someContentAssetId "); // Link content asset to lesson 2

  const finalCourse = courseBuilder.getCourse();

  finalCourse.registerObserver(emailNotifier);
  finalCourse.notifyCourseCompletion();
  finalCourse.unregisterObserver(emailNotifier);
};

module.exports = testInEnv;
