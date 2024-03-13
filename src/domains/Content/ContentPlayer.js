/**
 * Interface defining the basic functionalities for content playback.
 */
class ContentPlayer {
  /**
   * Starts playback of the content.
   */
  play() {}

  /**
   * Pauses playback of the content.
   */
  pause() {}

  /**
   * Stops playback of the content and resets the playback position.
   */
  stop() {}

  /**
   * Seeks to a specific position in the content (optional).
   *
   * @param {number} position - The target position within the content.
   */
  seek(position) {}
}

module.exports = ContentPlayer;
