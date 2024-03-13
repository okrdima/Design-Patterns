const { ContentDeliveryFacade } = require("~/domains/Content");
const { Lesson } = require("~/domains/Lesson");
const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const { COURSE_CATEGORY_TYPES, QUESTION_TYPES } = require("~/__constants__");
const { QuestionFactory } = require("~/domains/Question");

const singleQuestionData = {
  question: "What is the capital of France?",
  options: ["London", "Paris", "Berlin", "Madrid"],
  answerKey: 1, // Index of the correct answer ("Paris")
};
const multipleQuestionData = {
  question: "Which of the following are programming languages?",
  options: ["Java", "Python", "C++", "Excel"],
  answerKey: [0, 1, 2], // Indices of correct answers (Java, Python, C++)
};
const testInEnv = () => {
  const SingleQuestion = QuestionFactory.createQuestion(
    QUESTION_TYPES.SINGLE,
    singleQuestionData,
  );

  const MultipleQuestion = QuestionFactory.createQuestion(
    QUESTION_TYPES.MULTIPLE,
    multipleQuestionData,
  );

  const lessonTemplates1 = [
    new Lesson("Introduction", 1, "https://videourl"),
    new Lesson("Lesson 1 Content", 2, [SingleQuestion, MultipleQuestion]),
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
  courseBuilder.editLesson(2, "Welcome", "Welcome message to the course!");

  const finalCourse = courseBuilder.getCourse();
  const contentDeliveryFacade = new ContentDeliveryFacade(finalCourse);

  const courseContent = contentDeliveryFacade.getCourseContent();
  console.log("Formatted course content:");
  console.log(courseContent);
};

module.exports = testInEnv;
