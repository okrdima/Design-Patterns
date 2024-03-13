const { ContentPlayer } = require("~/domains/Content");

/**
 * A concrete player class for video content.
 */
class VideoPlayer extends ContentPlayer {
  /**
   * Reference to a mock video element for demonstration purposes.
   *
   *
   */
  videoElement = {
    src: null,
    currentTime: 0,
    play: () => {
      console.log("Video played");
    },
    pause: () => {
      console.log("Video paused");
    },
    stop: () => {
      console.log("Video stopped");
    },
  };

  /**
   * Creates a new VideoPlayer instance for the provided video URL.
   *
   * @param {string} videoUrl - The URL of the video content.
   */
  constructor(videoUrl) {
    super();
    this.videoElement.src = videoUrl;
  }

  /**
   * Starts playback of the video.
   *
   * @inheritdoc
   */
  play() {
    this.videoElement.play();
  }

  /**
   * Pauses playback of the video.
   *
   * @inheritdoc
   */
  pause() {
    this.videoElement.pause();
  }

  /**
   * Stops playback of the video and resets the playback time.
   *
   * @inheritdoc
   */
  stop() {
    this.videoElement.currentTime = 0;
    this.videoElement.stop();
  }

  /**
   * Seeks to a specific position in the video.
   *
   * @param {number} position - The target position (in seconds) within the video.
   *
   * @inheritdoc
   */
  seek(position) {
    this.videoElement.currentTime = position;
    console.log("Video seek");
  }
}

module.exports = VideoPlayer;
