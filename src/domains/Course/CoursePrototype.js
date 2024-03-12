const Course = require("~/domains/Course/Course");
const uuid = require("uuid");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const { Lesson } = require("~/domains/Lesson");

/**
 * Represents a blueprint or template for course creation using the Prototype design pattern.
 *
 * @class
 */
class CoursePrototype {
  /**
   * Creates a new CoursePrototype object.
   *
   * @constructor
   * @param {string} title - The title of the course prototype.
   * @param {string} description - A detailed description of the course content and objectives.
   * @param {string} instructorId - The ID of the instructor who created the course.
   * @param {string} [category] - An optional category to classify the course by subject or skill.
   * @param {Lesson[]} lessonTemplates - An array of Lesson objects representing the lesson structure.
   */
  constructor(title, description, instructorId, category, lessonTemplates) {
    this.title = title;
    this.description = description;
    this.instructorId = instructorId || uuid.v4();
    this.category = category || COURSE_CATEGORY_TYPES.LIFE_STYLE;
    this.lessonTemplates = [...lessonTemplates]; // Create a copy to prevent modification
  }

  /**
   * Creates a new Course object based on the current CoursePrototype.
   *
   * @method
   * @returns {Course} - A new Course object with a copy of the lesson structure.
   */
  clone() {
    // Create a new Course object and copy lessonTemplates (deep copy recommended for complex objects)
    const newCourse = new Course(
      this.title,
      this.description,
      this.instructorId,
      this.category,
    );
    newCourse.lessons = this.lessonTemplates.map((lesson) => {
      return new Lesson(
        lesson.title,
        lesson.order,
        lesson.content,
        lesson.contentAssetId,
        lesson.quizId,
      );
    }); // Deep copy of lessons
    return newCourse;
  }
}

module.exports = CoursePrototype;
