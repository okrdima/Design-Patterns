const { CourseBuilder, CoursePrototype } = require("~/domains/Course");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const { Lesson } = require("~/domains/Lesson");
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
    .addLesson("Introduction", 1)
    .addLesson("Lesson 1 Content", 2, "This is the lesson content.")
    .linkContentAsset(1, " someContentAssetId ") // Link content asset to lesson 2
    .editLesson(0, "Welcome", "Welcome message to the course!")
    .reorderLessons(1, 0); // Move lesson 2 (index 1) before lesson 1 (index 0)

  const finalCourse = courseBuilder.getCourse();
  console.log(finalCourse); // Display the final course structure
  console.log(finalCourse.getTotalLessons()); // Display the final course structure
};

module.exports = testInEnv;
