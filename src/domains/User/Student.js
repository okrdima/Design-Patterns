const { USER_ROLES, LESSON_STATES } = require("~/__constants__");
const User = require("./User");
const StudentMemento = require("./StudentMemento");

/**
 * Represents a student within the online course platform.
 *
 * @extends User
 * @class
 */
class Student extends User {
  /**
   * Creates a new Student object.
   *
   * @param {string} userId - The unique identifier for the student (optional, system generated).
   * @param {string} username - The username the student will use for login.
   * @param {string} email - The student's email address.
   * @param {string} password - The student's password (hashed for security).
   * @param {string} firstName - The student's first name.
   * @param {string} lastName - The student's last name.
   * @param {Date} createdAt - The date and time the student was created (optional).
   */
  constructor(
    userId,
    username,
    email,
    password,
    firstName,
    lastName,
    createdAt = new Date(),
  ) {
    super(
      userId,
      username,
      email,
      password,
      firstName,
      lastName,
      USER_ROLES.STUDENT,
      createdAt,
    );
    this.currentCourse = null; // Course ID for which Mementos are stored
    this.mementos = {}; // Object to store Mementos for the current course
    this.completedLessons = {}; // Object to store completed lessons (course ID -> completed lesson IDs)
  }

  /**
   * Sends a message to the chat mediator.
   *
   * @param {string} message - The message content to send.
   */
  sendMessage(message) {
    this.mediator.relayMessage(message, this);
  }

  /**
   * Receives a message sent to the student through the mediator.
   *
   * @param {string} message - The content of the message.
   * @param {User} from - The user who sent the message.
   */
  receiveMessage(message, from) {
    console.log(
      `${this.getUserName()} received message: ${message} (from ${from.role})`,
    );
  }

  /**
   * Sets the chat mediator for the student.
   *
   * @param {CourseMediator} mediator - The chat mediator instance.
   */
  setChatMediator(mediator) {
    this.mediator = mediator;
  }

  /**
   * Returns the user's username.
   *
   * @returns {string} The user's username.
   */
  getUserName() {
    return this.username;
  }

  /**
   * Sets the current course for which the student is working. This is used for associating Mementos with specific courses.
   *
   * @param {string} courseId - The ID of the course the student is currently enrolled in.
   */
  setCurrentCourse(courseId) {
    this.currentCourse = courseId;
    this.mementos[courseId] = []; // Initialize Memento array for the course if not already present
  }

  /**
   * Creates a new memento object capturing the student's current progress in the current course.
   *
   * @returns {StudentMemento|null} A new StudentMemento object if successful, null otherwise (e.g., student not enrolled in a course).
   */
  createMemento() {
    if (!this.currentCourse) {
      console.error("Student is not enrolled in any course!");
      return null;
    }

    const completedLessons = [...this.getCompletedLessons(this.currentCourse)]; // Copy completed lessons
    const lastAccessed = new Date();
    const memento = new StudentMemento(
      this.currentCourse,
      completedLessons,
      lastAccessed,
    );
    this.mementos[this.currentCourse].push(memento);
    return memento;
  }

  /**
   * Attempts to restore the student's progress from the provided memento.
   *
   * @param {StudentMemento} memento - The memento object containing the student's progress to restore.
   */
  restoreFromMemento(memento) {
    if (!memento || memento.getCourseId() !== this.currentCourse) {
      console.error("Invalid memento or mismatch with current course!");
      return;
    }

    // Update student's progress based on memento data
    this.setCompletedLessons(
      memento.getCourseId(),
      memento.getCompletedLessons(),
    );
  }

  /**
   * Returns a copy of the completed lessons array to avoid unintended mutation.
   *
   * @param {string} courseId - unique identifier of Course
   * @returns {Lesson[]} A copy of the completed lessons array.
   */
  getCompletedLessons(courseId) {
    if (!courseId) {
      console.error("Invalid course ID provided to getCompletedLessons!");
      return [];
    }

    return this.completedLessons[courseId] || []; // Return an empty array if the Course not found
  }

  /**
   * Sets the completed lesson IDs for a specific course within the student's data.
   *
   * @param {string} courseId - The ID of the course for which to set the completed lessons.
   * @param {Lesson[]} completedLessons - An array of IDs representing the student's completed lessons.
   */
  setCompletedLessons(courseId, completedLessons) {
    if (!courseId || !completedLessons || !Array.isArray(completedLessons)) {
      console.error("Invalid arguments provided to setCompletedLessons!");
      return;
    }

    this.completedLessons[courseId] = completedLessons;
  }

  /**
   * Marks a lesson as completed for the student in the specified course.

   * @param {string} courseId - The ID of the course containing the completed lesson.
   * @param {Lesson} lesson - The ID of the lesson the student has completed.
   */
  completeLesson(courseId, lesson) {
    if (!courseId || !lesson) {
      console.error("Invalid arguments provided to completeLesson!");
      return;
    }

    lesson.completeLesson();

    const completedLessons = this.getCompletedLessons(courseId);
    completedLessons.push(lesson); // Update student's completed lessons
    this.setCompletedLessons(courseId, completedLessons);

    // Additional logic for persisting data (e.g., database update)
    console.log(
      `${this.getUserName()} has completed lesson ${
        lesson._id
      } in course ${courseId}`,
    );
  }
}

module.exports = Student;
