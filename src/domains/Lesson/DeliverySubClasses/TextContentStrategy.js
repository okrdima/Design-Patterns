const { LessonDeliveryStrategy } = require("~/domains/Lesson");

/**
 * Concrete strategy class for delivering lessons via plain text content.
 * This class implements the `deliverLesson()` method to display formatted text content for the lesson.
 */
class TextContentStrategy extends LessonDeliveryStrategy {
  /**
   * Delivers the lesson content using plain text format.
   * This method is expected to:
   *   - Access the `lessonContent` property (if set) to retrieve the text content for the lesson.
   *   - Apply formatting to the text content as needed (e.g., line breaks, headings, paragraphs).
   *   - Display the formatted text content on the user interface in a readable manner.
   */
  deliverLesson() {
    console.log("Delivering lesson via text content...");
  }
}

module.exports = TextContentStrategy;
