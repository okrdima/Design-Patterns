const { ContentTemplateStep } = require("~/domains/ContentTemplate");

/**
 * Concrete step for adding assessments to evaluate learner understanding.
 */
class AddAssessmentStep extends ContentTemplateStep {
  /**
   * Adds assessments to measure learner understanding of the content.
   *
   * This step might involve including quizzes, exercises, or other evaluation
   * methods to gauge how well learners have grasped the content.
   */
  execute() {
    console.log(
      "Add assessments to measure learner understanding of the content.",
    );
  }
}

module.exports = AddAssessmentStep;
