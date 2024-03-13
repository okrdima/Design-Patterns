/**
 *  An abstract base class representing a piece of course content.
 *
 *  @abstract
 */
class Content {
  /**
   * Creates a new Content object.
   *
   * @param {string} title - The title of the content piece.
   * @param {string} type - The type of content (e.g., "lecture", "quiz", "assignment").
   * @param {*} content - The actual content data (format depends on the type).
   */
  constructor(title, type, content) {
    // Abstract content type
    this.title = title;
    this.type = type;
    this.content = content;
  }
}

module.exports = Content;
