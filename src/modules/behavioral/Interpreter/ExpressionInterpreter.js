const {
  LiteralExpression,
  VariableExpression,
} = require("~/domains/Expression/ExpressionSubClasses");
const {
  ConditionalExpression,
  LearningPathInterpreter,
} = require("~/domains/Expression");
const testInEnv = () => {
  // Example usage
  const interpreter = new LearningPathInterpreter();

  const context = {
    quiz1Score: 80,
    completedModule1: true,
    watchedIntroVideo: false,
  };

  const condition1 = "quiz1Score >= 70 && completedModule1"; // User needs at least 70 on quiz 1 and completed module 1
  const condition2 = "quiz1Score < 70 || !completedModule1"; // User scored less than 70 on quiz 1 or not completed module 1
  const condition3 = "watchedIntroVideo"; // User needs to watch the intro video

  // Check if user meets the conditions for different learning paths
  console.log(
    `Path 1 (High Score & Module Completion): ${interpreter.evaluate(
      condition1,
      context,
    )}`,
  );
  console.log(
    `Path 2 (Low Score or Incomplete Module): ${interpreter.evaluate(
      condition2,
      context,
    )}`,
  );
  console.log(
    `Path 3 (Intro Video): ${interpreter.evaluate(condition3, context)}`,
  );

  const context2 = {
    userName: "John",
    courseProgress: "Module 2",
  };

  const content1 = new LiteralExpression("Welcome");
  const content2 = new VariableExpression("userName");
  const content3 = new VariableExpression("courseProgress");

  const greeting = new ConditionalExpression(
    'courseProgress === "Module 1"',
    new LiteralExpression("Start your learning journey!"),
    new LiteralExpression("Continue learning in Module 2!"),
  );

  const prefix = [content1, content2, content3].reduce(
    (previousValue, currentValue) => {
      return [...previousValue, currentValue.evaluate(context2)];
    },
    [],
  );

  console.log([...prefix, greeting.evaluate(context2)].join(" ")); // Output: Welcome, John to Module 2! Continue learning in Module 2!
};

module.exports = testInEnv;
