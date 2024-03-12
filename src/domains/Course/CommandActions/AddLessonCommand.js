const { CourseActionsCommand } = require("~/domains/Course");

/**
 * Concrete command class for adding a lesson to a course.
 */
class AddLessonCommand extends CourseActionsCommand {
  /**
   * @param {Lesson} lesson - The lesson object to be added to the course.
   */
  constructor(lesson) {
    super(); // Call the parent class constructor
    this.lesson = lesson;
  }

  /**
   * Executes the command to add the lesson to the specified course.
   *
   * @param {Course} course - The course object to which the lesson will be added.
   */
  execute(course) {
    // Access course data (replace with your actual logic)
    if (course) {
      course.lessons.push(this.lesson);
      console.log(`Lesson added to course: ${course.title}`);
      // (Simulate saving the updated course data)
    } else {
      console.error("Course not found!");
    }
  }
}

module.exports = AddLessonCommand;
