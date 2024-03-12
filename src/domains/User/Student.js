const { USER_ROLES } = require("~/__constants__");
const User = require("~/domains/User/User");

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
}

module.exports = Student;
