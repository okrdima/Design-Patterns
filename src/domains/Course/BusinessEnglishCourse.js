const CoursePrototype = require("~/domains/Course/CoursePrototype");

/**
 * Concrete Course class representing a Business English course.
 * Extends the abstract CoursePrototype class.
 */
class BusinessEnglishCourse extends CoursePrototype {
  /**
   * Creates a new BusinessEnglishCourse instance.
   *
   * @param {string} title - The title of the course.
   * @param {string} level - The CEFR level of the course (e.g., "A1", "B2").
   * @param {string} description - A description of the course content.
   */
  constructor(title, level, description) {
    super(title, level, description);
  }

  /**
   * Returns a list of module names included in the course.
   *
   * @returns {string[]} An array of module names.
   */
  getModules() {
    return [
      "Introduction to Business English",
      "Writing Business Emails",
      "Giving Business Presentations",
      "Negotiation Skills",
    ];
  }

  /**
   * Creates a deep copy of the current BusinessEnglishCourse object.
   *
   * @returns {BusinessEnglishCourse} A new instance with identical properties.
   */
  clone() {
    return new BusinessEnglishCourse(this.title, this.level, this.description);
  }
}

module.exports = BusinessEnglishCourse;
