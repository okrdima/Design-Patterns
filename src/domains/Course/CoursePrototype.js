/**
 * Abstract Course Prototype class defining the interface for concrete course implementations.
 */
class CoursePrototype {
  /**
   * Creates a new CoursePrototype instance.
   *
   * @param {string} title - The title of the course.
   * @param {string} level - The CEFR level of the course (e.g., "A1", "B2").
   * @param {string} description - A description of the course content.
   */
  constructor(title, level, description) {
    this.title = title;
    this.level = level;
    this.description = description;
  }

  /**
   * Abstract method that must be implemented in concrete subclasses to return a list of module names.
   *
   * @throws {Error} An error if the method is not implemented in a concrete subclass.
   * @returns {string[]} An array of module names (implementation required in concrete subclasses).
   */
  getModules() {
    throw new Error("This method is not implemented");
  }

  /**
   * Abstract method that must be implemented in concrete subclasses to create a deep copy of the object.
   *
   * @throws {Error} An error if the method is not implemented in a concrete subclass.
   * @returns {CoursePrototype} A deep copy of the current object (implementation required in concrete subclasses).
   */
  clone() {
    throw new Error("This method is not implemented");
  }
}

module.exports = CoursePrototype;
