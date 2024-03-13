const Content = require("./Content");

/**
 *  An interface representing secure content within a course.
 *  Extends the base Content class to add authorization checks.
 *
 *  @extends Content
 */
class SecureContent extends Content {
  /**
   * Returns true if the current user is authorized to access this content, false otherwise.
   *
   * @returns {Promise<boolean>} - True if authorized, false otherwise.
   */
  isAuthorized() {}
}

module.exports = SecureContent;
