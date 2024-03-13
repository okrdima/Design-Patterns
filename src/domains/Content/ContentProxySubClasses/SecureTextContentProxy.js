const SecureContentProxy = require("~/domains/Content/SecureContentProxy");

/**
 * Placeholder function for fetching text content.
 *
 * (Replace this function with your actual implementation for fetching text content)
 *
 * @param {string} textUrl - The URL of the text content.
 * @returns {string} - The fetched text content (placeholder implementation returns the URL).
 */
const fetchTextContent = (textUrl) => textUrl;

/**
 *  A concrete class that acts as a proxy for secure text content.
 *  Extends the SecureContentProxy base class to handle text content specifically.
 *
 *  @extends SecureContentProxy
 */
class SecureTextContentProxy extends SecureContentProxy {
  /**
   * Creates a new SecureTextContentProxy instance.
   *
   * @param {string} textUrl - The URL of the secure text content.
   */
  constructor(textUrl) {
    super(() => fetchTextContent(textUrl));
  }
}

module.exports = SecureTextContentProxy;
