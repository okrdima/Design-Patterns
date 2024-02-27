# Software-Design-Pattern-Series
## Technical Task
### Project: English Online Course Platform

**Entities**:
* User
* Question 
* Course


**Question Types**:

### Lab 1 ###
1. Single Choice: Suitable for single topics and skill levels.
Example: "What is the past tense of 'to go'?"
(a) went
(b) goed
(c) goedest
(d) is gone
2. Multiple Choice: Versatile format suitable for various topics and skill levels.
Present a question with multiple answer options, only one correct.
Example (same as above)
3. Drag and Drop: Interactive format for testing vocabulary or sentence structure.
Provide a list of words/phrases for participants to drag and drop into corresponding slots.
Example: Match greetings to situations:
(Informal)
(Formal)
(Good morning)
(Hello)
(How do you do?)
4. Open-Ended: For higher-level learners, assess critical thinking and writing skills through written responses.
Question Module Design:

>Consider implementing the Factory pattern or Abstract factory pattern for the Question module. Implementation of fabrics should be as in example
```javascript
class QuestionFactory {
    static createQuestion(type, data) {
        switch (type) {
            case QUESTION_TYPES.SINGLE:
                return new SingleChoiceQuestion(data);
            case QUESTION_TYPES.MULTIPLE:
                return new MultipleChoiceQuestion(data);
            case QUESTION_TYPES.DRAG_AND_DROP:
                return new DragAndDropQuestion(data);
            case QUESTION_TYPES.FREE_ANSWER:
                return new FreeAnswerQuestion(data);

            default:
                throw new Error("Invalid question type");
        }
    }
}
```
###### or

```javascript
class QuestionFactoryManager {
    static getFactory(type) {
        switch (type) {
            case QUESTION_TYPES.SINGLE:
                return new SingleChoiceQuestionFactory();
            case QUESTION_TYPES.MULTIPLE:
                return new MultipleChoiceQuestionFactory();

            case QUESTION_TYPES.FREE_ANSWER:
                return new FreeAnswerQuestionFactory();
            case QUESTION_TYPES.DRAG_AND_DROP:
                return new DragAndDropQuestionFactory();
            default:
                throw new Error("Unsupported question type");
        }
    }

    static createQuestion(type, data) {
        const factory = this.getFactory(type);
        return factory.createQuestion(type, data);
    }
}
```
### Lab2 ###

Course Structure Ideas for English Online Course Platform:
1. Skill-Based Approach:
 - Organize courses based on specific English language skills, such as:
 - Grammar: Courses focused on specific grammar topics like tenses, subject-verb agreement, or verb conjugations.
 - Vocabulary: Courses focused on building vocabulary in different contexts like business, travel, or everyday use.
 - Reading Comprehension: Courses aimed at improving reading skills through various texts and exercises.
 - Listening Comprehension: Courses focused on improving listening skills through audio lessons and activities.
 - Speaking & Pronunciation: Courses designed to improve spoken English, including pronunciation practice and conversation exercises.
2. Level-Based Approach:
 - Organize courses based on learner proficiency levels, following the Common European Framework of Reference for Languages (CEFR) (A1, A2, B1, B2, C1, C2).
 - Each level will offer courses tailored to the specific learning objectives and challenges faced by learners at that stage.
3. Thematic Approach:
 - Create courses focused on specific themes or topics, such as:
 - Business English: Develop skills needed for professional communication.
 - Academic English: Prepare learners for academic writing and research.
 - Conversational English: Practice everyday conversation skills.
 - English for Travel: Learn essential vocabulary and phrases for travel situations.
4. Mixed Approach:

 - Combine elements of the above approaches to create comprehensive courses that cater to various learning needs. For example, a course could focus on a specific theme (Business English) while incorporating different skills like grammar, vocabulary, and conversation within that theme.

>Consider implementing the Prototype pattern for the Course module.
