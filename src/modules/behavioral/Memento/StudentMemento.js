const { Student } = require("~/domains/User");
const uuid = require("uuid");
const { Lesson } = require("~/domains/Lesson");
const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const testInEnv = () => {
  const student = new Student(
    uuid.v4(),
    "Shakil Oneal",
    "jane.doe@email.com",
    "hashedPassword",
    "Jane",
    "Doe",
  );

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
  courseBuilder.editLesson(0, "Welcome", "Welcome message to the course!");

  const finalCourse = courseBuilder.getCourse();

  student.setCurrentCourse(finalCourse._id);

  const lessonIterator = finalCourse.getLessons();
  const lesson1 = lessonIterator.next().value;
  const lesson2 = lessonIterator.next().value;
  const lesson3 = lessonIterator.next().value;

  student.completeLesson(finalCourse._id, lesson1);
  student.completeLesson(finalCourse._id, lesson2);

  console.log(
    "Shakil Oneal's completed lessons:",
    student.getCompletedLessons(finalCourse._id).length,
  );

  const memento = student.createMemento();

  console.log("Shakil Oneal's progress snapshot:", memento); // Display memento details

  student.completeLesson(finalCourse._id, lesson3);

  // Check completed lessons after restoration
  console.log(
    "Shakil Oneal's completed lessons (before restore):",
    student.getCompletedLessons(finalCourse._id).length,
  );

  student.restoreFromMemento(memento);

  // Check completed lessons after restoration
  console.log(
    "Shakil Oneal's completed lessons (after restore):",
    student.getCompletedLessons(finalCourse._id).length,
  );
};

module.exports = testInEnv;
