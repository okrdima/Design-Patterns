const Content = require("~/domains/Content/Content");
const { CONTENT_TYPES } = require("~/__constants__");

/**
 *  A concrete subclass of Content representing a video content piece.
 */
class VideoContent extends Content {
  /**
   * Creates a new VideoContent object.
   *
   * @param {string} title - The title of the video content.
   * @param {string} videoUrl - The URL of the video.
   */
  constructor(title, videoUrl) {
    super(title, CONTENT_TYPES.VIDEO, videoUrl);
  }
}

module.exports = VideoContent;
