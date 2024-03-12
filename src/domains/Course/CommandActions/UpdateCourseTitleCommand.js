const { CourseActionsCommand } = require("~/domains/Course");

class UpdateCourseTitleCommand extends CourseActionsCommand {
  /**
   * @param {string} newTitle - The new title for the course.
   */
  constructor(newTitle) {
    super();
    this.newTitle = newTitle;
  }

  execute(course) {
    // Access course data (replace with your actual logic)
    if (course) {
      course.title = this.newTitle;
      console.log(`Course title updated to: ${this.newTitle}`);
    } else {
      console.error("Course not found!");
    }
  }
}

module.exports = UpdateCourseTitleCommand;
