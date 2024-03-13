const { ContentPlayer } = require("~/domains/Content");

/**
 * A concrete player class for text content.
 */
class TextFileReader extends ContentPlayer {
  /**
   * The text content to be displayed or read aloud.
   */
  textContent;

  /**
   * Creates a new TextFileReader instance for the provided text content.
   *
   * @param {string} textContent - The text content to be played.
   */
  constructor(textContent) {
    super();
    this.textContent = textContent;
  }

  /**
   * Simulates "playing" text content (e.g., display or read aloud).
   *
   * @inheritdoc
   */
  play() {
    console.log("Displaying text content:", this.textContent);
  }

  /**
   * Not applicable for text content.
   *
   * @inheritdoc
   */
  pause() {
    // No action needed
  }

  /**
   * Not applicable for text content.
   *
   * @inheritdoc
   */
  stop() {
    // No action needed
  }

  /**
   * Not applicable for text content (optional).
   *
   * @inheritdoc
   */
  seek(position) {
    // No seeking functionality for text
  }
}

module.exports = TextFileReader;
