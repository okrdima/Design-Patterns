const {
  UpdateCourseTitleCommand,
  AddLessonCommand,
  DeleteLessonCommand,
} = require("~/domains/Course/CommandActions");
const { Lesson } = require("~/domains/Lesson");
const { CoursePrototype, CourseBuilder } = require("~/domains/Course");
const { LIFE_STYLE } = require("~/__constants__/courseCategoryTypes");
const testInEnv = () => {
  const lessonTemplates1 = [new Lesson("Conclusion", 2)];
  const prototype1 = new CoursePrototype(
    "Basic Course",
    "A fundamental course...",
    "instructor123",
    LIFE_STYLE,
    lessonTemplates1,
  );

  // Example usage: Build a course with some functionalities
  const courseBuilder = new CourseBuilder(prototype1);
  courseBuilder.addLesson("Introduction", 1);

  const course = courseBuilder.getCourse();

  const updateTitleCommand = new UpdateCourseTitleCommand(
    "Advanced JavaScript",
  );
  course.setActionsCommand(updateTitleCommand);
  course.executeActionsCommand();

  console.log("updateTitleCommand", course);

  const newLesson = new Lesson("JavaScript for beginners", 3);
  const addLessonCommand = new AddLessonCommand(newLesson);
  course.setActionsCommand(addLessonCommand);
  course.executeActionsCommand();

  console.log("addLessonCommand", course);

  const deleteLessonCommand = new DeleteLessonCommand(newLesson._id);
  course.setActionsCommand(deleteLessonCommand);
  course.executeActionsCommand();

  console.log("deleteLessonCommand", course);
};

module.exports = testInEnv;
