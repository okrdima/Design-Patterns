const { Lesson } = require("~/domains/Lesson");
const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
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
    COURSE_CATEGORY_TYPES.LIFE_STYLE,
    lessonTemplates1,
  );

  // Example usage: Build a course with some functionalities
  const courseBuilder = new CourseBuilder(prototype1);
  courseBuilder
    .addLesson("Introduction", 4)
    .addLesson("Lesson 1 Content", 5, "This is the lesson content.");

  const course = courseBuilder.getCourse();

  const lessonIterator = course.getLessons();

  while (lessonIterator.hasNext()) {
    const lesson = lessonIterator.next().value;

    console.log("Lesson", lesson);
    console.log(`Lesson Title: ${lesson.getTitle()}`);
    console.log(lesson.getContent());
    console.log(lesson.getId());
    console.log("----------");
  }
};

module.exports = testInEnv;
