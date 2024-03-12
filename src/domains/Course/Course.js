const { Lesson } = require("~/domains/Lesson");
const uuid = require("uuid");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");
const { LessonIterator } = require("~/domains/Lesson");

/**
 * Represents a course model within the online learning platform.
 *
 * @class
 */
class Course {
  /**
   * Creates a new Course object.
   *
   * @constructor
   * @param {string} title - The title of the course.
   * @param {string} description - A detailed description of the course content and objectives.
   * @param {string} instructorId - The ID of the instructor who created the course.
   * @param {string} [category] - An optional category to classify the course by subject or skill.
   * @param {number} price - Price of the course.
   */
  constructor(title, description, instructorId, category, price) {
    this._id = uuid.v4();
    this.title = title || "Default title";
    this.description = description || "Default title";
    this.instructorId = instructorId || uuid.v4();
    this.category = category || COURSE_CATEGORY_TYPES.LIFE_STYLE;
    this.price = price || 0;
    /**
     * @type {Lesson[]}
     * @public
     */
    this.lessons = []; // Array to store Lesson objects
  }

  _observers = [];

  /**
   * Stores the currently set course editing command.
   *
   * This private property holds a reference to the `CourseActionsCommand` object that represents the pending course edit action.
   */
  _actionsCommand = null;

  /**
   * Calculates and returns the total number of lessons currently in the course.
   *
   * @method
   * @returns {number} - The total number of lessons in the course.
   */
  getTotalLessons() {
    return this.lessons.length;
  }

  /**
   * Get the price.
   *
   * @return {number} - The price of the course
   */
  getPrice() {
    return this.price;
  }

  /**
   * Registers an observer to receive notifications about course completion.
   *
   * @param observer - The CourseCompletionObserver object to be registered.
   */
  registerObserver(observer) {
    this._observers.push(observer);
  }

  /**
   * Unregisters an observer to stop receiving course completion notifications.
   *
   * @param observer - The CourseCompletionObserver object to be unregistered.
   */
  unregisterObserver(observer) {
    const observerIndex = this._observers.indexOf(observer);
    if (observerIndex !== -1) {
      this._observers.splice(observerIndex, 1);
    }
  }

  /**
   * Notifies all registered observers about the completion of this course.
   */
  notifyCourseCompletion() {
    this._observers.forEach((observer) => observer.onCourseCompletion(this));
  }

  /**
   * Sets the editing command for the course.
   *
   * This method allows setting a specific `CourseActionsCommand` object, which encapsulates the logic for a particular course editing action.
   *
   * @param {CourseActionsCommand} command - The `CourseActionsCommand` object representing the desired course edit action.
   */
  setActionsCommand(command) {
    this._actionsCommand = command;
  }

  /**
   * Executes the currently set course editing command.
   *
   * This method attempts to execute the stored `actionsCommand` if it exists. If a command is present, it calls its `execute()` method to perform the edit on the course data. After execution, the stored command is cleared to prevent unintended repeated executions.
   */
  executeActionsCommand() {
    if (this._actionsCommand) {
      this._actionsCommand.execute(this);
      this._actionsCommand = undefined; // Clear the command after execution
    } else {
      console.warn("No edit command set!");
    }
  }

  /**
   * Returns a new LessonIterator instance to iterate over the lessons in the course.
   *
   * @returns {LessonIterator} - An iterator object that can be used to access
   *   lessons sequentially.
   */
  getLessons() {
    return new LessonIterator(this.lessons);
  }

  /**
   * Accepts a ContentVisitor object and allows it to process the Course and its child Lessons.
   *
   * This method calls the `visitCourse` method on the provided visitor, passing the current
   * Course object as an argument. Additionally, it iterates through the course's lessons
   * and calls the `acceptVisitor` method on each lesson, effectively allowing the visitor
   * to traverse the entire course content structure.
   *
   * @param {ContentVisitor} visitor - The visitor object that will process the course content.
   */
  acceptVisitor(visitor) {
    visitor.visitCourse(this);

    const lessonIterator = this.getLessons();

    while (lessonIterator.hasNext()) {
      const lesson = lessonIterator.next().value;
      lesson.acceptVisitor(visitor);
    }
  }
}

module.exports = Course;
