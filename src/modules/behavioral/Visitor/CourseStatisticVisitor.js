const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const { Lesson } = require("~/domains/Lesson");
const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const { ContentProgressVisitor } = require("~/domains/Visitor");
const {
  CompletedState,
  InProgressState,
} = require("~/domains/Lesson/LessonStatesSubClasses");
const testInEnv = () => {
  const lessonTemplates1 = [
    new Lesson("Introduction", 1),
    new Lesson("Main content", 2),
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
  courseBuilder
    .addLesson("Second part", 4)
    .addLesson("Third part", 5, "This is the lesson content.")
    .editLesson(
      0,
      undefined,
      undefined,
      undefined,
      undefined,
      new InProgressState(),
    )
    .editLesson(
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      new InProgressState(),
    )
    .editLesson(
      2,
      undefined,
      undefined,
      undefined,
      undefined,
      new CompletedState(),
    )
    .editLesson(
      3,
      undefined,
      undefined,
      undefined,
      undefined,
      new CompletedState(),
    )
    .setCoursePrice(200);

  const finalCourse = courseBuilder.getCourse();

  const visitor = new ContentProgressVisitor(finalCourse);
  finalCourse.acceptVisitor(visitor); // Visit the entire course structure

  console.log(visitor.getOverallProgress()); // Displays progress for the course (lessons)
};

module.exports = testInEnv;
