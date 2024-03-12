const { ContentTemplateStep } = require("~/domains/ContentTemplate");

/**
 * Concrete step for defining learning objectives as part of content creation.
 */
class DefineLearningObjectivesStep extends ContentTemplateStep {
  /**
   * Prompts the user to define learning objectives for the content.
   *
   * Learning objectives are crucial for understanding what learners should gain
   * from the content.
   */
  execute() {
    console.log("Prompt user to define learning objectives for the content.");
  }
}

module.exports = DefineLearningObjectivesStep;
