const { ContentPlayer } = require("~/domains/Content");

/**
 * A concrete player class for audio content.
 */
class AudioPlayer extends ContentPlayer {
  /**
   * Reference to a mock audio element for demonstration purposes.
   *
   * (Replace this with your actual implementation using an audio element from the DOM).
   */
  audioElement = {
    src: null,
    currentTime: 0,
    play: () => {
      console.log("Audio played");
    },
    pause: () => {
      console.log("Audio paused");
    },
    stop: () => {
      console.log("Audio stopped");
    },
  };

  /**
   * Creates a new AudioPlayer instance for the provided audio URL.
   *
   * @param {string} audioUrl - The URL of the audio content.
   */
  constructor(audioUrl) {
    super();
    this.audioElement.src = audioUrl;
  }

  /**
   * Starts playback of the audio.
   *
   * @inheritdoc
   */
  play() {
    this.audioElement.play();
  }

  /**
   * Pauses playback of the audio.
   *
   * @inheritdoc
   */
  pause() {
    this.audioElement.pause();
  }

  /**
   * Stops playback of the audio and resets the playback time.
   *
   * @inheritdoc
   */
  stop() {
    this.audioElement.currentTime = 0; // Reset playback time
    this.audioElement.pause();
  }

  /**
   * Seeks to a specific position in the audio.
   *
   * @param {number} position - The target position (in seconds) within the audio.
   *
   * @inheritdoc
   */
  seek(position) {
    this.audioElement.currentTime = position;
    console.log("Audio seek");
  }
}

module.exports = AudioPlayer;
