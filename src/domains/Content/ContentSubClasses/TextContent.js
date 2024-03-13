const Content = require("~/domains/Content/Content");
const { CONTENT_TYPES } = require("~/__constants__");

/**
 *  A concrete subclass of Content representing a textual content piece.
 */
class TextContent extends Content {
  /**
   * Creates a new TextContent object.
   *
   * @param {string} title - The title of the text content.
   * @param {string} text - The actual text content.
   */
  constructor(title, text) {
    super(title, CONTENT_TYPES.TEXT, text);
  }
}

module.exports = TextContent;
