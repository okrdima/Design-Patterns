/**
 * Interface for a step involved in content generation.
 *
 * Subclasses will implement this interface to define specific
 * content generation steps.
 */
class ContentTemplateStep {
  /**
   * Executes the specific logic for the content generation step.
   */
  execute() {}
}

module.exports = ContentTemplateStep;
