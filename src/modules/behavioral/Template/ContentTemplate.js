const { ContentTemplate } = require("~/domains/ContentTemplate");
const {
  DefineLearningObjectivesStep,
  CreateContentStep,
  AddAssessmentStep,
} = require("~/domains/ContentTemplate/ContentTemplateSteps");
const testInEnv = () => {
  // Define a content template with specific steps
  const myTemplate = new ContentTemplate("Interactive Lecture", [
    new DefineLearningObjectivesStep(),
    new CreateContentStep(),
    new AddAssessmentStep(),
  ]);

  // Generate the content using the template
  myTemplate.generateContent();
};

module.exports = testInEnv;
