const {
  QuestionFactory,
  QuestionAbstractFactory,
} = require("~/domains/Question");
const { QUESTION_TYPES } = require("~/__constants__");

const { QuestionFactoryManager, SingleChoiceQuestionFactory } =
  QuestionAbstractFactory;

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

const dragAndDropQuestionData = {
  question: "Match the countries with their respective capitals:",
  items: ["France", "Germany", "Spain", "Italy"],
  answerKey: {
    France: 1, // "Paris" (position 1 in items)
    Germany: 2, // "Berlin" (position 2 in items)
    Spain: 3, // "Madrid" (position 3 in items)
    Italy: 0, // "Rome" (position 0 in items)
  },
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

  const DragAndDropQuestion = QuestionFactory.createQuestion(
    QUESTION_TYPES.DRAG_AND_DROP,
    dragAndDropQuestionData,
  );

  console.group("SingleQuestion");
  console.log(SingleQuestion.getQuestion());
  console.log(SingleQuestion.getAnswerKey());
  console.groupEnd();

  console.group("MultipleQuestion");
  console.log(MultipleQuestion.getQuestion());
  console.log(MultipleQuestion.getAnswerKey());
  console.groupEnd();

  console.group("DragAndDropQuestion");
  console.log(DragAndDropQuestion.getQuestion());
  console.log(DragAndDropQuestion.getAnswerKey());
  console.groupEnd();

  //Abstract factory

  const questionData = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answerKey: 1, // Index of the correct answer ("Paris")
  };

  // Using QuestionFactoryManager
  const FactoryManagerQuestion = QuestionFactoryManager.createQuestion(
    QUESTION_TYPES.SINGLE,
    questionData,
  );
  console.group("FactoryManagerQuestion");
  console.log(FactoryManagerQuestion.getQuestion());
  console.log(FactoryManagerQuestion.getAnswerKey());
  console.groupEnd();

  // Or using individual factory (if not using a manager)
  const singleChoiceFactory = new SingleChoiceQuestionFactory();
  const question = singleChoiceFactory.createQuestion(
    QUESTION_TYPES.SINGLE,
    questionData,
  );

  console.group("singleChoiceFactory");
  console.log(question.getQuestion());
  console.log(question.getAnswerKey());
  console.groupEnd();
};

module.exports = testInEnv;
