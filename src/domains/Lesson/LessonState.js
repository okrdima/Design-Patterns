/**
 * Interface representing a state of a lesson in terms of user progress.
 *
 * This interface defines methods that each concrete state should implement
 * to handle the specific functionalities associated with that progress stage.
 */
class LessonState {
  constructor(name, nextStatus) {
    /**
     * Name of the current lesson state.
     * @type {string}
     */
    this.name = name;

    /**
     * Reference to the next state object in the transition sequence.
     * @type {LessonState}
     */
    this.nextStatus = nextStatus;
  }

  /**
   * Transitions the lesson state to the next state in the sequence.
   *
   * This method returns a new instance of the next state object.
   *
   * @returns {LessonState} - The next state object in the transition sequence.
   */
  next() {
    return new this.nextStatus();
  }

  /**
   * Returns a human-readable label for the current state.
   *
   * @returns {string} - The name of the current state (e.g., "Not Started", "In Progress", "Completed").
   */
  getStateLabel() {
    return this.name;
  }
}

module.exports = LessonState;
