const { ContentTemplateStep } = require("~/domains/ContentTemplate");

/**
 * Concrete step for creating the actual content.
 */
class CreateContentStep extends ContentTemplateStep {
  /**
   * Creates the content based on the defined learning objectives.
   *
   * This step might involve writing text, generating multimedia elements, or using
   * other content creation tools, depending on the specific content type.
   */
  execute() {
    console.log("Create the content based on the defined learning objectives.");
  }
}

module.exports = CreateContentStep;
