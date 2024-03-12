/**
 * Interface defining the basic user functionalities.
 *
 * @interface UserInterface
 */
class UserInterface {
  /**
   * Returns the user's username for login.
   *
   * @returns {string} The user's username.
   */
  getUserName() {
    throw new Error("This method must be implemented by the subclass");
  }

  /**
   * Receives a message sent to the user through the mediator.
   *
   * @param {string} message - The content of the message.
   * @param {User} from - The user who sent the message.
   */
  receiveMessage(message, from) {}

  /**
   * Sends a message to the chat mediator.
   *
   * @param {string} message - The message content to send.
   */
  sendMessage(message) {}

  /**
   * Sets the chat mediator for the student.
   *
   * @param {CourseMediator} mediator - The chat mediator instance.
   */
  setChatMediator(mediator) {}
}

module.exports = UserInterface;
