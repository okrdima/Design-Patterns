# Software-Design-Pattern-Series
## Technical Task
### Project: English Online Course Platform

**Entities**:
* User
* Question 
* Course


**Question Types**:

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
