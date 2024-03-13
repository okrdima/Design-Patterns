const SecureContent = require("~/domains/Content/SecureContent");

/**
 * Placeholder function for authorization checks.
 *
 * (Replace this function with your actual implementation for authorization logic)
 *
 * @returns {Promise<boolean>} - A promise that resolves to true or false based on a random chance.
 */
const checkAuthorization = () =>
  new Promise((resolve) => resolve(Math.random() < 0.5));
/**
 *  A base class for providing secure access to content within a course.
 *  Implements the SecureContent interface and handles lazy loading and authorization checks.
 *
 *  @extends SecureContent
 */
class SecureContentProxy extends SecureContent {
  /**
   * Stores the actual content object fetched lazily.
   * @type {Content}
   */
  content = null;

  /**
   * A function that retrieves the content asynchronously.
   * @typedef {function(): Promise<Content>} ContentProvider
   */

  /**
   * Creates a new SecureContentProxy instance.
   *
   * @param {ContentProvider} contentProvider - A function that retrieves the content asynchronously.
   */
  constructor(contentProvider) {
    super();
    this.contentProvider = contentProvider;
  }

  /**
   * Downloads the secure content and performs authorization checks before providing access.
   *
   * @async
   * @throws {Error} - If authorization fails.
   * @returns {Promise<Content>} - The downloaded and authorized content object.
   */
  async download() {
    if (!this.content) {
      this.content = await this.contentProvider();
    }

    if (!(await this.isAuthorized())) {
      throw new Error("Not authorized to access this content");
    }

    console.log("Accessing secure content:", this.content);

    return this.content;
  }

  /**
   * Performs an authorization check to determine if the user can access this content.
   *
   * (Replace this function with your actual implementation for authorization logic)
   *
   * @async
   * @abstract
   * @returns {Promise<boolean>} - True if authorized, false otherwise.
   */
  async isAuthorized() {
    return await checkAuthorization();
  }
}

module.exports = SecureContentProxy;
