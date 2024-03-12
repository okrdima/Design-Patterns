const { CourseActionsCommand } = require("~/domains/Course");

/**
 * Concrete command class for deleting a lesson from a course.
 */
class DeleteLessonCommand extends CourseActionsCommand {
  /**
   * @param {string} lessonId - The ID of the lesson to be deleted from the course.
   */
  constructor(lessonId) {
    super();
    this.lessonId = lessonId;
  }

  /**
   * Executes the command to delete the lesson with the specified ID from the course.
   *
   * @param {Course} course - The course object from which the lesson will be deleted.
   */
  execute(course) {
    // Access course data and remove the lesson (replace with your actual logic)
    if (course) {
      const lessonIndex = course.lessons.findIndex(
        (lesson) => lesson._id === this.lessonId,
      );
      if (lessonIndex !== -1) {
        course.lessons.splice(lessonIndex, 1);
        console.log(`Lesson deleted from course: ${course.title}`);
        // (Simulate saving the updated course data)
      } else {
        console.error("Lesson not found!");
      }
    } else {
      console.error("Course not found!");
    }
  }
}

module.exports = DeleteLessonCommand;
