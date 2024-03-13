const {
  SecureVideoContentProxy,
  SecureQuizContentProxy,
  SecureTextContentProxy,
} = require("~/domains/Content/ContentProxySubClasses");
const { QuestionFactory, Question } = require("~/domains/Question");
const {
  QUESTION_TYPES,
  COURSE_CATEGORY_TYPES,
  CONTENT_TYPES,
} = require("~/__constants__");
const { Lesson } = require("~/domains/Lesson");
const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const {
  VideoContent,
  TextContent,
  QuizContent,
} = require("~/domains/Content/ContentSubClasses");

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

const testInEnv = async () => {
  const SingleQuestion = QuestionFactory.createQuestion(
    QUESTION_TYPES.SINGLE,
    singleQuestionData,
  );

  const MultipleQuestion = QuestionFactory.createQuestion(
    QUESTION_TYPES.MULTIPLE,
    multipleQuestionData,
  );

  const lessonTemplates1 = [
    new Lesson(
      "Introduction",
      1,
      new VideoContent("Introduction", "https://videourl"),
    ),
    new Lesson(
      "Lesson 1 Content",
      2,
      new QuizContent("Lesson 1 Content", [SingleQuestion, MultipleQuestion]),
    ),
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
  courseBuilder.editLesson(
    2,
    "Welcome",
    new TextContent("Welcome", "Welcome message to the course!"),
  );

  const finalCourse = courseBuilder.getCourse();

  const contents = finalCourse.getCourseContent();

  const promises = contents.map(async (lesson) => {
    if (lesson.content instanceof QuizContent) {
      const secureQuiz = new SecureQuizContentProxy(lesson.content);
      return await secureQuiz.download(); // Performs authorization based on quiz access rules
    }

    if (lesson.content instanceof VideoContent) {
      const secureVideo = new SecureVideoContentProxy(lesson.content);
      return await secureVideo.download(); // Performs authorization based on quiz access rules
    }

    if (lesson.content instanceof TextContent) {
      const secureText = new SecureTextContentProxy(lesson.content);

      return await secureText.download(); // Performs authorization based on text access rules
    }
  });

  const results = await Promise.allSettled(promises);

  console.log(results);
};

module.exports = testInEnv;
