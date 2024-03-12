const { CourseMediator } = require("~/domains/Course");
const { Teacher, Student } = require("~/domains/User");
const uuid = require("uuid");
const testInEnv = () => {
  const mediator = new CourseMediator();

  const teacher1 = new Teacher(
    uuid.v4(),
    "John Doe",
    "john.doe@email.com",
    "hashedPassword",
    "John",
    "Doe",
  );
  const student1 = new Student(
    uuid.v4(),
    "Shakil Oneal",
    "jane.doe@email.com",
    "hashedPassword",
    "Jane",
    "Doe",
  );

  // Usage example
  student1.setChatMediator(mediator);
  teacher1.setChatMediator(mediator);

  mediator.registerUser(student1);
  mediator.registerUser(teacher1);

  student1.sendMessage("Hi! I have a question about the assignment.");
  teacher1.sendMessage(
    "Hello Shakil, happy to help! What's your question?",
    student1,
  );
};

module.exports = testInEnv;
