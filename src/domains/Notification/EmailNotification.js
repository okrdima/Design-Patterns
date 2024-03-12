const { CourseCompletionObserver } = require("~/domains/Course");

/**
 * Concrete observer class that handles course completion notifications by sending an email.
 * (Simulates email functionality for demonstration purposes).
 */
class EmailNotification extends CourseCompletionObserver {
  onCourseCompletion(course) {
    console.log(
      `Sending email notification for course completion: "${course.title}"`,
    );
    // (Simulate sending email to instructor)
  }
}

module.exports = EmailNotification;
