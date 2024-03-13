const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const { Lesson } = require("~/domains/Lesson");

const testInEnv = () => {
  const lessonTemplates1 = [
    new Lesson("Introduction", 1),
    new Lesson("Lesson 1 Content", 2),
    new Lesson("Conclusion", 3),
  ];

  const lessonTemplates2 = [
    new Lesson("Introduction", 1),
    new Lesson("Activity 1", 2),
    new Lesson("Quiz 1", 3),
    new Lesson("Lesson 2 Content", 4),
    new Lesson("Conclusion", 5),
  ];

  const prototype1 = new CoursePrototype(
    "Basic Course",
    "A fundamental course...",
    "instructor123",
    COURSE_CATEGORY_TYPES.LIFE_STYLE,
    lessonTemplates1,
  );
  const prototype2 = new CoursePrototype(
    "Advanced Course",
    "In-depth exploration...",
    "instructor456",
    COURSE_CATEGORY_TYPES.ACADEMIC,
    lessonTemplates2,
  );

  // Create CourseBuilder instances based on prototypes
  const courseBuilder1 = new CourseBuilder(prototype1);
  const courseBuilder2 = new CourseBuilder(prototype2);

  // Example customization using CourseBuilder methods
  courseBuilder1
    .addLesson("Introduction 2", 6)
    .addLesson("Lesson 2 Content", 7, "This is the lesson content."); // Insert lesson after Introduction

  courseBuilder2.reorderLessons(1, 0); // Swap positions of Quiz 1 and Lesson 2 Content

  // Get the final course objects
  const finalCourse1 = courseBuilder1.getCourse();
  const finalCourse2 = courseBuilder2.getCourse();

  console.log("Final Course 1 Structure:", finalCourse1);
  console.log("Final Course 2 Structure:", finalCourse2);
};

module.exports = testInEnv;
