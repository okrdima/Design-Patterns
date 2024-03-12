# Software-Design-Pattern-Series
## Technical Task  Project -  English Online Course Platform

## Entities:
* `User`
* `Question` 
* `Course`
* `Lesson`
* `Quiz`
* `Enrolment`
* `Content asset`
* `Student To Do`
* `Student Favorites`
* `Content Template`

## Data structure

## User ##
| Key        | Data Type         | Description                                   |
|------------|-------------------|-----------------------------------------------|
| _id        | String            | Unique identifier                             |
| userId     | String (optional) | System generated identifier                   |
| username   | String            | Username for login                            |
| email      | String            | User's email address                          |
| password   | Hashed String     | Hashed user password for security             |
| firstName  | String            | User's first name                             |
| lastName   | String            | User's last name                              |
| role       | String            | User's role (Student, Teacher, Administrator) |
| balance    | Number            | User's balance from bank                      |
| _createdAt | Date              | Date and time the user was created            |

## Course ##
| Key            | Data Type         | Description                                                        |
|----------------|-------------------|--------------------------------------------------------------------|
| _id            | String            | Unique identifier                                                  |
| courseId       | String (optional) | System generated identifier                                        |
| title          | String            | Course title                                                       |
| description    | String            | Description of the course content                                  |
| category       | String            | type of the course content                                         |
| level          | String            | Difficulty level (Beginner, Intermediate, Advanced)                |
| skillFocus     | String            | Specific skills targeted by the course (Grammar, Vocabulary, etc.) |
| authorId       | String            | Reference to the Teacher who created the course                    |
| _createdAt     | Date              | Date and time the course was created                               |
| enrollmentOpen | Boolean           | Indicates if enrollment is currently open                          |
| enrollmentFee  | Number (Decimal)  | Enrollment fee (optional)                                          |
| imageId        | String (optional) | Reference to an image representing the course                      |
| price          | Number            | Price of the course                                                |

**Course category**:
1. Academic: This category would encompass courses related to traditional academic subjects like Math, Science, History, Literature, Languages, etc.
2. Business & Professional: This category could include courses on topics like Management, Marketing, Finance, Accounting, Entrepreneurship, Software Development, etc. 
3. Arts & Design: This category would cover courses related to creative fields such as Visual Arts, Music, Photography, Fashion Design, Interior Design, etc.
4. Personal Development: This category could include courses on self-improvement topics like Time Management, Communication Skills, Public Speaking, Leadership, Personal Finance, etc.
5. Technology: Courses in this category could cover software development, programming languages, cyber-security, cloud computing, data science, etc.
6. Lifestyle: This category could include courses on hobbies, crafts, cooking, travel, photography, etc.

## Lesson ##
| Key                     | Data Type         | Description                                        |
|-------------------------|-------------------|----------------------------------------------------|
| _id                     | String            | Unique identifier                                  |
| lessonId                | String (optional) | System generated identifier                        |
| title                   | String            | Title of the lesson                                |
| description             | String            | Description of the lesson content                  |
| orderNumber             | Number (Integer)  | Sequence of the lesson within the course           |
| content                 | String            | Lesson content (text or reference to media)        |
| estimatedCompletionTime | Number (Integer)  | Estimated time to complete the lesson (in minutes) |
| courseId                | String            | Reference to the Course the lesson belongs to      |
| _createdAt              | Date              | Date and time the lesson was created               |


## Question ##

| Key                  | Data Type               | Description                                                          |
|----------------------|-------------------------|----------------------------------------------------------------------|
| _id                  | String                  | Unique identifier                                                    |
| questionId           | String (optional)       | System generated identifier                                          |
| text                 | String                  | The question itself                                                  |
| type                 | String                  | Question type (SingleChoice, MultipleChoice, DragAndDrop, OpenEnded) |
| answerOptions        | String Array (optional) | Applicable for some question types (answer choices)                  |
| correctAnswerIndexes | Number Array (optional) | Applicable for some question types (indices of correct answers)      |
| difficultyLevel      | String                  | Difficulty level (Beginner, Intermediate, Advanced)                  |
| lessonId (optional)  | String                  | Reference to the Lesson the question belongs to (optional)           |
| _createdAt           | Date                    | Date and time the question was created                               |

**Question Types**:
1. Single Choice: Suitable for single topics and skill levels.
   Example: "What is the past tense of 'to go'?"
   (a) went
   (b) go
   (c) go in
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


## Quiz ##

| Key                  | Data Type         | Description                                                                   |
|----------------------|-------------------|-------------------------------------------------------------------------------|
| _id                  | String            | Unique identifier                                                             |
| quizId               | String (optional) | System generated identifier                                                   |
| title                | String            | Title of the quiz                                                             |
| description          | String            | Description of the quiz                                                       |
| timeLimit (optional) | Number (Integer)  | Time limit for completing the quiz (in minutes)                               |
| lessonId (optional)  | String            | Reference to the Lesson the quiz belongs to (optional)                        |
| courseId (optional)  | String            | Reference to the Course the quiz belongs to (alternative to lessonId)         |
| questionIds          | String Array      | References to the Questions used in the quiz                                  |
| scoringMechanism     | String            | Method for calculating quiz score (points per question, weighted scoring, etc |


## Enrolment ##

| Key                     | Data Type         | Possible Variants                        |
|-------------------------|-------------------|------------------------------------------|
| enrollmentId            | String            | Unique identifier                        |
| userId                  | String            | Reference to User                        |
| courseId                | String            | Reference to Course                      |
| _createdAt              | Date              | \-                                       |
| progress                | Object (optional) | Completed lessons/quizzes data structure |
| overallGrade (optional) | String            | Letter grade (A, B, C, etc.)             |

## Content Asset ##
| Key            | Data Type | Possible Variants |
|----------------|-----------|-------------------|
| contentAssetId | String    | Unique identifier |
| fileName       | String    | \-                |
| fileType       | String    | Image, Video      |

## Student To Do ##
| Field Name | Data Type         | Description                                                                                 |
|------------|-------------------|---------------------------------------------------------------------------------------------|
| _id        | String            | Unique identifier for each entry in the To-Do list (e.g., ObjectID).                        |
| student_id | String            | Foreign key referencing the User table (identifies the Student who created the To-Do item). |
| course_id  | String (Optional) | Foreign key referencing the Course table (null if adding a lesson).                         |
| lesson_id  | String            | Foreign key referencing the Lesson table (identifies the specific lesson added).            |
| due_date   | Date (Optional)   | Allows Students to set a custom due date for completing the To-Do item.                     |
| completed  | Boolean           | Flag indicating whether the Student has finished the added course or lesson (true/false).   |
| _createdAt | Date              | Timestamp representing the date and time the To-Do item was created.                        |


## Student Favorites ##
| Field Name | Data Type         | Description                                                                                      |
|------------|-------------------|--------------------------------------------------------------------------------------------------|
| _id        | String            | Unique identifier for each entry in the Favorites list (e.g., ObjectID).                         |
| student_id | String            | Foreign key referencing the User table (identifies the Student who favorite the course/lesson).  |
| course_id  | String (Optional) | Foreign key referencing the Course table (null if adding a lesson to favorites).                 |
| lesson_id  | String            | Foreign key referencing the Lesson table (identifies the specific lesson favorite).              |
| _createdAt | Date              | Timestamp representing the date and time the course/lesson was added to Favorites.               |

## Content Template ##
| Field Name  | Data Type        | Description                                                                         |
|-------------|------------------|-------------------------------------------------------------------------------------|
| _id         | String           | Name of the content template (e.g., "Lecture Template", "Quiz Template")            |
| steps       | Array of Objects | Array of objects representing the steps involved in the content generation workflow |
| type        | String           | (Within steps array) Type of the step (e.g., "DefineLearningObjectivesStep")        |
| description | String           | (Within steps array) Description of the step's purpose                              |
| _createdAt  | Date             | Timestamp representing the date and time the course/lesson was added to Favorites.  |


## User Stories ##

### User Management (CRUD) - Detailed User Stories

### 1. User Creation (As an Administrator)

##### Description: An Administrator should be able to create new user accounts for Students and Teachers on the platform.
##### Acceptance Criteria:
* The Administrator should be able to access a user creation form through the admin dashboard.
* The form should require the following information:
  * Username (unique)
  * Email address (unique, validated for proper format)
  * Password (meet complexity requirements, password confirmation)
  * First Name
  * Last Name
  * Role (dropdown selection: Student, Teacher)
* The Administrator should be able to submit the form to create a new user account.
* Upon successful creation, the system should display a confirmation message and optionally redirect the Administrator to a user management page.
* Error handling should be implemented for invalid or missing data (e.g., duplicate username, invalid email format, weak password).
### 2.User Read (As an Administrator)

##### Description: An Administrator should be able to view a list of all users or a specific user by their ID.
##### Acceptance Criteria:
* The Administrator should be able to access a user management page through the admin dashboard.
* This page should display a list of all users on the platform, including username, email, first name, last name, role, and date created (sortable columns).
* The Administrator should be able to search for a specific user by username or email address.
* Clicking on a user in the list should redirect the Administrator to a user details page.
* The user details page should display all the information mentioned above, along with any additional relevant details (e.g., last login date).
### 3. User Update (As an Administrator)

#### Description: An Administrator should be able to edit the information of existing users (excluding usernames and roles).
#### Acceptance Criteria:
* The Administrator should be able to access the user details page for a specific user (as described in User Read).
* This page should provide edit functionality for the following user information:
  * Email address (validated for proper format)
  * First Name
  * Last Name
* The Administrator should be able to modify the user's information and submit the changes.
* The system should validate any changes made (e.g., email format) and display error messages if necessary.
* Upon successful update, the system should display a confirmation message and optionally redirect the Administrator back to the user details page.
### 4. User Delete (As an Administrator)

#### Description: An Administrator should be able to delete user accounts.
#### Acceptance Criteria:
* The Administrator should be able to access the user details page for a specific user (as described in User Read).
* This page should provide a clear option (e.g., a button) for deleting the user account.
* Clicking the delete option should prompt the Administrator for confirmation with a clear warning message about the action's irreversibility.
* Upon confirmation, the system should delete the user account and all associated data (consider data purging policies and regulations).
* The Administrator should receive a confirmation message after successful deletion and be redirected back to the user management page (filtered to exclude the deleted user).


### 5. Additional User Stories:
* As a Student: I should be able to access the content of a course I'm enrolled in, including lessons and quizzes.
* As a Student: I should be able to take quizzes and see my results.
* As a Teacher: I should be able to view student progress within a course (completed lessons/quizzes and grades).
* As an Administrator: I should be able to generate reports on course enrollment, student progress, and overall platform usage.

### Question Management (CRUD) - Detailed User Stories

### 1. Question Creation (As a Teacher)

#### Description: A Teacher (course author) should be able to create new questions to be used in lessons and quizzes.
#### Acceptance Criteria:
* The Teacher should be able to access a question creation form within the course authoring interface.
* The form should allow the Teacher to specify the following:
  * Question text (clear and concise)
  * Question type (dropdown selection: SingleChoice, MultipleChoice, DragAndDrop, OpenEnded)
  * Answer options (text fields or upload for DragAndDrop) - applicable for some question types
  * Correct answer(s) selection (based on question type) - applicable for some question types
  * Difficulty level (dropdown selection: Beginner, Intermediate, Advanced)
  * Optional association with a specific lesson within the course (dropdown selection)
* The Teacher should be able to preview the question before submitting it.
* Upon successful creation, the system should display a confirmation message and optionally redirect the Teacher to the question list for the course.
* Error handling should be implemented for missing or invalid data (e.g., empty question text, incorrect answer selections for question types).
### 2. Question Read (As a Teacher)

#### Description: A Teacher (course author) should be able to view a list of all questions created for a specific course or a single question by its ID.
#### Acceptance Criteria:
* The Teacher should be able to access a question management page within the course authoring interface for a specific course.
* This page should display a list of all questions associated with the course, including question text, type, difficulty level, and associated lesson (if any).
* The list should be sortable by various criteria (e.g., question text, type, difficulty).
* The Teacher should be able to search for a specific question by keyword or filter by type and/or difficulty level.
* Clicking on a question in the list should redirect the Teacher to the question details page.
* The question details page should display all the information mentioned above, along with the answer options and correct answer selections (masked for some question types).
### 3. Question Update (As a Teacher)

#### Description: A Teacher (course author) should be able to edit the details of existing questions.
#### Acceptance Criteria:
* The Teacher should be able to access the question details page for a specific question (as described in Question Read).
* This page should provide edit functionality for all question details mentioned in Question Creation (excluding question ID).
* The Teacher should be able to modify the question information and submit the changes.
* The system should validate any changes made (e.g., required fields) and display error messages if necessary.
* Upon successful update, the system should display a confirmation message and optionally redirect the Teacher back to the question list or details page.
### 4. Question Delete (As a Teacher)

#### Description: A Teacher (course author) should be able to delete questions they created.
#### Acceptance Criteria:
* The Teacher should be able to access the question details page for a specific question (as described in Question Read).
* This page should provide a clear option (e.g., a button) for deleting the question.
* Clicking the delete option should prompt the Teacher for confirmation with a clear warning message about the action's irreversibility and potential impact on existing quizzes.
* Upon confirmation, the system should delete the question and all references to it in quizzes.
* The Teacher should receive a confirmation message after successful deletion and be redirected back to the question list for the course (filtered to exclude the deleted question).

#### Additional Considerations:

* Implement a mechanism for bulk actions on questions (e.g., delete or update difficulty level for multiple questions).
* Allow the Teacher to add media (images, audio) to questions or answer options (if applicable).
* Integrate question creation with a question bank for potential reuse across courses (optional).

### Course Management (CRUD) - Detailed User Stories

### 1. Course Creation (As a Teacher)

#### Description: A Teacher should be able to create new courses to be offered on the platform.
#### Acceptance Criteria:
* The Teacher should be able to access a course creation form through the teacher dashboard.
* The form should require the following information:
  * Course title (clear and concise)
  * Course description (detailed overview of the course content)
  * Target level (dropdown selection: Beginner, Intermediate, Advanced)
  * Skill focus (dropdown selection with various skill areas like Grammar, Vocabulary, etc.)
  * Enrollment fee (optional, number field)
  * Course image (upload functionality)
* The Teacher should be able to specify the order of lessons within the course during creation (optional).
* The system should allow the Teacher to preview the course details before publishing.
* Upon successful creation, the course will be marked as unpublished by default.
* The Teacher should receive a confirmation message and be redirected to the course management page.
* Error handling should be implemented for missing or invalid data (e.g., empty title, invalid fee format).
### 2. Course Read (As a Teacher & Administrator)

#### Description:
A Teacher should be able to view a list of all courses they created and access details of each course.
An Administrator should be able to view a list of all courses on the platform, including those created by other teachers.
####  Acceptance Criteria:
* The Teacher and Administrator should be able to access a course management page through their respective dashboards.
* This page should display a list of all courses, including:
  * Course title
  * Author (Teacher's name)
  * Description (truncated preview)
  * Level
  * Skill focus
  * Enrollment status (published/unpublished)
  * Date created
* The list should be sortable by various criteria (e.g., title, author, creation date). 
* The Teacher and Administrator should be able to search for specific courses by title or keyword.
* Clicking on a course in the list should redirect the user to the course details page.
* The course details page should display all the information mentioned above, along with the course image (full view) and optional details like enrollment fee.
### 3. Course Update (As a Teacher)

#### Description: A Teacher (course author) should be able to edit the details of their unpublished courses.
#### Acceptance Criteria:
* The Teacher should be able to access the course details page for a specific course (as described in Course Read).
* This page should provide edit functionality for all course details mentioned in Course Creation.
* The Teacher should be able to modify the course information, including adding or removing lessons (if applicable).
* The system should validate any changes made (e.g., required fields) and display error messages if necessary.
* Upon successful update, the system should display a confirmation message and optionally redirect the Teacher back to the course details page or course management list.
### 4. Course Delete (As a Teacher & Administrator)

#### Description:
A Teacher (course author) should be able to delete their unpublished courses.
An Administrator should be able to delete any course on the platform, even if published and with enrolled students.
#### Acceptance Criteria:
* The Teacher and Administrator should be able to access the course details page for a specific course (as described in Course Read).
* This page should provide a clear option (e.g., a button) for deleting the course.
* Clicking the delete option should prompt the user for confirmation with a clear warning message about the action's irreversibility.
* Teacher: Upon confirmation, the system should delete the unpublished course and all associated data (lessons, questions).
* Administrator: Upon confirmation, the system should handle course deletion considering enrolled students:
  * Option 1: Archive the course and prevent further enrollment, but retain student progress data.
  * Option 2: Migrate enrolled students to a similar course (if available) and delete the original course.
* The chosen approach should be configurable and clearly communicated in the confirmation message.
* The user should receive a confirmation message after successful deletion and be redirected back to the course management list (filtered accordingly).
### Additional Considerations:

* Implement a course publishing functionality that allows the Teacher to make the course available for student enrollment.
* Allow the Teacher to manage enrollment settings after publishing (e.g., set open/closed enrollment periods, manage enrollment fees).
* Integrate course management with a course review system where students can leave feedback after completing the course (optional).
* Provide course analytics for Teachers and Administrators to track student enrollment, completion rates, and overall course performance.


### Lesson Management (CRUD) - Detailed User Stories
This document outlines detailed user stories for Lesson Management (CRUD) functionalities in the English Online Course Platform:

### 1. Lesson Creation (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to create new lessons within a specific course.
#### Acceptance Criteria:
* The Teacher should be able to access the lesson management page for a specific course through the course authoring interface.
* This page should provide a form for creating new lessons.
* The form should require the following information:
  * Lesson title (clear and concise)
  * Lesson description (detailed overview of the lesson content)
  * Estimated completion time (number field in minutes)
  * Lesson content (text editor or option to upload media like videos, audio)
  * Optional association with specific content assets (e.g., downloadable resources)
* The Teacher should be able to specify the order of the lesson within the course sequence (up/down arrows or drag-and-drop functionality).
* The system should allow the Teacher to preview the lesson content before publishing.
* Upon successful creation, the lesson will be marked as unpublished by default.
* The Teacher should receive a confirmation message and be redirected back to the lesson management page for the course.
* Error handling should be implemented for missing or invalid data (e.g., empty title, invalid estimated time).
### 2. Lesson Read (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to view a list of all lessons within a specific course and access details of each lesson.
#### Acceptance Criteria:
* The Teacher should be able to access the lesson management page for a specific course (as described in Lesson Creation).
* This page should display a list of all lessons associated with the course, including:
  * Lesson title
  * Description (truncated preview)
  * Estimated completion time
  * Content type (text or media)
  * Order within the course sequence
  * Publication status (published/unpublished)
* The list should be sortable by various criteria (e.g., title, order, creation date).
* The Teacher should be able to search for specific lessons within the course by title or keyword.
* Clicking on a lesson in the list should redirect the Teacher to the lesson details page.
* The lesson details page should display all the information mentioned above, along with the full lesson content and any associated content assets (preview or download options).
### 3. Lesson Update (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to edit the details of their unpublished lessons.
#### Acceptance Criteria:
* The Teacher should be able to access the lesson details page for a specific lesson (as described in Lesson Read).
* This page should provide edit functionality for all lesson details mentioned in Lesson Creation.
* The Teacher should be able to modify the lesson information, including reordering within the course sequence and adding/removing associated content assets.
* The system should validate any changes made (e.g., required fields) and display error messages if necessary.
* Upon successful update, the system should display a confirmation message and optionally redirect the Teacher back to the lesson details page or the lesson management list.
### 4. Lesson Delete (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to delete their unpublished lessons.
#### Acceptance Criteria:
* The Teacher should be able to access the lesson details page for a specific lesson (as described in Lesson Read).
* This page should provide a clear option (e.g., a button) for deleting the lesson.
* Clicking the delete option should prompt the Teacher for confirmation with a clear warning message about the action's irreversibility and potential impact on course flow.
* Upon confirmation, the system should delete the unpublished lesson and all associated content assets.
* The Teacher should receive a confirmation message after successful deletion and be redirected back to the lesson management list for the course (filtered to exclude the deleted lesson).
### Additional Considerations:

* Implement a lesson publishing functionality that allows the Teacher to make the lesson visible to enrolled students within the course sequence.
* Allow the Teacher to manage lesson prerequisites (if applicable) where students must complete specific lessons before accessing others.
* Integrate lesson management with quiz creation, allowing the Teacher to associate specific lessons with relevant quizzes for assessment.
* Provide lesson analytics for Teachers to track student progress within lessons and identify areas requiring improvement.


### Quiz Management (CRUD) - Detailed User Stories

### 1. Quiz Creation (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to create new quizzes to assess student learning within a course.
#### Acceptance Criteria:
* The Teacher should be able to access the quiz creation tool through the course authoring interface for a specific course.
  * The tool should allow the Teacher to define the following:
  * Quiz title (clear and concise)
  * Quiz description (instructions and purpose of the quiz)
  * Time limit (optional, number field in minutes) for completing the quiz
  * Association with a specific lesson within the course (dropdown selection) - optional
  * Association with the entire course (if not linked to a specific lesson)
* The Teacher should be able to select questions from the question bank or create new questions directly within the quiz creation tool.
* The Teacher should be able to define the point value for each question within the quiz.
* The system should allow the Teacher to preview the quiz before publishing.
* Upon successful creation, the quiz will be marked as unpublished by default.
* The Teacher should receive a confirmation message and be redirected back to the quiz management page for the course.
* Error handling should be implemented for missing or invalid data (e.g., empty title, invalid time limit).
### 2. Quiz Read (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to view a list of all quizzes created for a specific course and access details of each quiz.
#### Acceptance Criteria:
* The Teacher should be able to access the quiz management page for a specific course (as described in Quiz Creation).
* This page should display a list of all quizzes associated with the course, including:
  * Quiz title
  * Description (truncated preview)
  * Time limit (if set)
  * Associated lesson (if any)
  * Number of questions
  * Publication status (published/unpublished)
* The list should be sortable by various criteria (e.g., title, creation date).
* The Teacher should be able to search for specific quizzes within the course by title or keyword.
* Clicking on a quiz in the list should redirect the Teacher to the quiz details page.
* The quiz details page should display all the information mentioned above, along with the list of questions included in the quiz and their point values.
### 3. Quiz Update (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to edit the details of their unpublished quizzes.
#### Acceptance Criteria:
* The Teacher should be able to access the quiz details page for a specific quiz (as described in Quiz Read).
* This page should provide edit functionality for all quiz details mentioned in Quiz Creation.
* The Teacher should be able to modify the quiz information, including adding/removing questions, adjusting point values, and changing time limits.
* The system should validate any changes made (e.g., required fields) and display error messages if necessary.
* Upon successful update, the system should display a confirmation message and optionally redirect the Teacher back to the quiz details page or the quiz management list.
### 4. Quiz Delete (As a Teacher - Course Author)

#### Description: A Teacher (course author) should be able to delete their unpublished quizzes.
#### Acceptance Criteria:
* The Teacher should be able to access the quiz details page for a specific quiz (as described in Quiz Read).
* This page should provide a clear option (e.g., a button) for deleting the quiz.
* Clicking the delete option should prompt the Teacher for confirmation with a clear warning message about the action's irreversibility.
* Upon confirmation, the system should delete the unpublished quiz and any references to it in associated lessons or courses.
* The Teacher should receive a confirmation message after successful deletion and be redirected back to the quiz management list for the course (filtered to exclude the deleted quiz).
### Additional Considerations:

* Implement a quiz publishing functionality that allows the Teacher to make the quiz available to enrolled students within the course or lesson.
* Allow the Teacher to configure quiz settings like randomizing question order, enabling multiple attempts, and displaying correct answers after completion (based on quiz type).
* Integrate quiz management with student results, allowing the Teacher to view individual student performance and overall quiz statistics.
* Offer the option for students to review their quiz attempts after completion, showing correct answers and explanations (optional based on quiz settings).

### Enrollment Management (CRUD) - Detailed User Stories

### 1. Course Enrollment (As a Student)

#### Description: A Student should be able to enroll in a course offered on the platform.
#### Acceptance Criteria:
* The Student should be able to access a course catalog or browse courses by category, skill focus, or other criteria.
* Each course listing should display relevant information like title, description, level, skill focus, enrollment fee (if applicable), and instructor name.
* The Student should be able to click on a course to view its details, including a dedicated enrollment section.
* The enrollment section should clearly display any prerequisites (completed courses) and enrollment requirements (payment for paid courses).
* If the course is free or the Student meets the requirements, a clear "Enroll Now" button should be available.
* Clicking "Enroll Now" should initiate the enrollment process.
* For paid courses, the system should redirect the Student to a secure payment gateway for fee processing.
* Upon successful payment or enrollment for free courses, the system should confirm the enrollment and provide access to the course content.
* The Student should receive a confirmation email with course details and access instructions.
### 2. Enrollment Read (As a Student)

#### Description: A Student should be able to view a list of their enrolled courses and access course details.
#### Acceptance Criteria:
* The Student should be able to access their account dashboard.
* The dashboard should display a section dedicated to "My Courses."
* This section should list all courses the Student is currently enrolled in.
* The list should display relevant information for each course, such as title, instructor, progress (percentage completed or lessons finished), and last access date.
* Clicking on a course in the list should redirect the Student to the course details page.
* The course details page should provide an overview of the course content, including lessons, quizzes (if applicable), and any additional resources.
### 3. Enrollment Update (As a Student - Optional)

#### Description: As an optional functionality, consider allowing Students to update specific enrollment details.
#### Acceptance Criteria:
* The Student should be able to access the course details page for an enrolled course (as described in Enrollment Read).
* This page could offer options for students to:
* Update their notification preferences for the course (e.g., email alerts for new content).
* Download additional course materials (if provided by the instructor).
* Any changes made should be saved within the Student's enrollment record.
### 4. Enrollment Delete (As a Student - Optional)

#### Description: As an optional functionality, consider allowing Students to un enroll from courses before completion.
#### Acceptance Criteria:
* The Student should be able to access the course details page for an enrolled course (as described in Enrollment Read).
* This page could offer an option for Students to un enroll from the course.
* Clicking the "Un enroll" button should prompt the Student for confirmation with a clear warning message about losing access to course content and progress.
* Upon confirmation, the system should un enroll the Student from the course and remove access to any course materials.
* The Student should receive a confirmation email notifying them of their un enrollment.
### Additional Considerations:

* Implement a wait-list system for courses with limited enrollment capacity.
* Allow Students to track their overall course completion progress and individual lesson completion within their enrolled courses.
* Integrate enrollment management with course cancellation policies, allowing Students to receive refunds or course credits based on established guidelines.
* Offer options for bulk enrollment actions for Students taking multiple courses simultaneously (optional).

### Content Asset Management (CRUD) - Detailed User Stories

### 1. Content Asset Creation (As a Teacher or Administrator)

#### Description: A Teacher (course author) or Administrator should be able to create and upload new content assets to be used within courses or as standalone resources.
#### Acceptance Criteria:
* Both Teachers and Administrators should be able to access a content asset creation interface.
* The interface should allow uploading various file types (e.g., PDFs, images, audio, video) relevant to English language learning.
* Each content asset should be accompanied by metadata, including:
  * Title (clear and concise description)
  * Description (optional: detailed explanation of the content)
  * Content type (dropdown selection: PDF, Image, Audio, Video)
  * Tags (optional: keywords for search-ability)
  * Visibility (dropdown selection: Public - available to all users, Private - only accessible to specific courses/teachers)
* The system should allow previewing uploaded content assets before finalizing creation.
* Upon successful upload, the system should display a confirmation message and allow further actions (e.g., edit details, assign to a course).
### 2. Content Asset Read (As a Student, Teacher, or Administrator)

#### Description: Students, Teachers, and Administrators should be able to view a list of available content assets based on their access permissions.
#### Acceptance Criteria:
* Students, Teachers, and Administrators should be able to access a content asset library through their respective dashboards.
* The library should display a list of all content assets or filtered based on visibility settings (public vs. private).
* The list should display relevant information for each asset, including:
  * Title
  * Description (truncated preview)
  * Content type icon
  * Tags (for search-ability)
* The list should be sortable by various criteria (e.g., title, upload date, content type).
* Users should be able to search for specific content assets by keyword or filter by type and/or tags.
* Clicking on a content asset in the list should redirect the user to a dedicated asset details page.
* The asset details page should display the full title, description, content type, and a preview or download option depending on the file type.
### 3. Content Asset Update (As a Teacher or Administrator)

#### Description: A Teacher (course author) or Administrator should be able to edit the details of existing content assets they created or have access to.
#### Acceptance Criteria:
* Teachers and Administrators should be able to access the details page for a specific content asset (as described in Content Asset Read).
* This page should provide edit functionality for the asset's title, description, tags, and visibility settings.
* Additionally, Teachers can assign specific assets to their courses during the lesson creation process.
* The system should validate any changes made (e.g., required fields) and display error messages if necessary.
* Upon successful update, the system should display a confirmation message and optionally redirect the user back to the asset details page or the content asset library.
### 4. Content Asset Delete (As a Teacher or Administrator)

#### Description: A Teacher (course author) or Administrator should be able to delete content assets they created or have access to manage.
#### Acceptance Criteria:
* Teachers and Administrators should be able to access the details page for a specific content asset (as described in Content Asset Read).
* This page should provide a clear option (e.g., a button) for deleting the asset.
* Clicking the delete option should prompt the user for confirmation with a clear warning message about the action's irreversibility.
* Upon confirmation, the system should delete the content asset and any references to it within courses.
* The user should receive a confirmation message after successful deletion and be redirected back to the content asset library (filtered accordingly).
### Additional Considerations:

* Implement a version control system for content assets, allowing users to revert to previous versions if necessary.
* Integrate content asset management with course creation, allowing Teachers to easily insert and link relevant assets within lessons.
* Allow bulk actions on content assets (e.g., delete or update tags for multiple assets).
* Consider copyright and permission management for user-uploaded content assets.

### Student To Do (CRUD) - Detailed User Stories

### 1. Add Courses/Lessons to To-Do Section (As Student)
#### Description: As a Student, I should be able to add specific courses or lessons to a dedicated "To-Do" section within the mobile app to track my learning progress and prioritize my coursework.
#### Acceptance Criteria:

* The Student should be able to access a "To-Do" section within their mobile app dashboard.
* This section should display a list of courses and/or lessons the Student has chosen to add.
* When viewing a course or lesson detail page within the app, a clear option (e.g., button) should be available to "Add to To-Do."
* Clicking "Add to To-Do" should add the course or lesson to the Student's personal To-Do list.
* The To-Do list should display relevant information for each added item:
  * Course title (if applicable)
  * Lesson title
  * Estimated completion time (for lessons)
  * Due date (optional: Students can set a custom due date for each item)
  * Completion status (checkbox or indicator)
* Students should be able to:
  * Reorder items within the To-Do list using drag-and-drop functionality (optional).
  * Mark items as completed by checking them off the list.
  * Remove items from the To-Do list by swiping or tapping a delete option.
### Student Favorites (CRUD) - Detailed User Stories

### 1. Add Courses/Lessons to Favorites List (As Student)
#### Description: As a Student, I should be able to create a personalized "Favorites" list within the mobile app to easily access and revisit courses or lessons I find particularly interesting or valuable for future reference.
#### Acceptance Criteria:
* The Student should be able to access a "Favorites" section within their mobile app dashboard.
* This section should display a list of courses and/or lessons the Student has marked as favorites.
* When viewing a course or lesson detail page within the app, a clear option (e.g., star icon) should be available to "Add to Favorites."
* Clicking "Add to Favorites" should add the course or lesson to the Student's Favorites list.
* The Favorites list should display the same relevant information as the To-Do list (course title, lesson title, estimated completion time).
* Students should be able to:
  * Remove courses or lessons from their Favorites list by tapping the star icon again or using a dedicated "Remove from Favorites" option.

### Lab 1 ###
>Factory pattern and Abstract factory pattern for the Question module

### Description: As a Teacher (course author), I should be able to create various question types (e.g., multiple choice, single choice, free answer, drag and drop) to assess student learning within quizzes.
##### Sub-tasks for Implementing Question Factory and Question FactoryManager:

### 1. Core Question Structure:

#### 1.1 Define a base class Question:
* This class will represent the core functionalities common to all question types.
* It should include attributes like:
  * question_text (string): The text of the question itself.
  * points (number): The point value assigned to the question.
  * difficulty_level (string): Optional field to categorize question difficulty (e.g., Easy, Medium, Hard).
* It can also define methods like:
  * get_question_type(): This method should return a string representing the specific question type (e.g., "Multiple Choice", "Free Answer").
  * is_correct_answer(answer): This abstract method should be implemented by subclasses to check if a provided answer is correct.
### 2. Implement Question Subclasses based on Types:
#### 2.1 SingleChoiceQuestion:

Inherits from the base `Question` class.
  Additional attributes:
* options (list of strings): A list containing all possible answer choices.
* correct_answer (string): The single correct answer choice.
* Override the is_correct_answer(answer) method to compare the provided answer with the correct_answer.
#### 2.2 MultipleChoiceQuestion:

Inherits from the base `Question` class.
* Additional attributes:
  * options (list of strings): A list containing all possible answer choices.
  * correct_answers (list of strings): A list containing all valid correct answer choices (can have multiple).
  * Override the is_correct_answer(answer) method to check if the provided answer matches at least one element in the correct_answers list.
#### 2.3 FreeAnswerQuestion:

* Inherits from the base `Question` class.
* No additional attributes required in this basic implementation.
* The is_correct_answer(answer) method might require further logic depending on how free answer evaluation is implemented (e.g., keyword matching, partial credit).
#### 2.4 DragAndDropQuestion (Optional):

Inherits from the base `Question` class.
* Additional attributes:
  * drag_items (list of strings): A list containing elements to be dragged.
  * drop_zones (list of strings): A list containing corresponding drop zone labels.
  * correct_mappings (dictionary): A dictionary mapping drag items to their corresponding drop zones (defines the correct answer).
  * The is_correct_answer(answer) method should check if the provided answer (user's drag-and-drop mapping) matches the correct_mappings dictionary.
### 3. Question Factory and Question FactoryManager:

#### 3.1 Question Factory:

* This class will be responsible for creating Question objects based on the provided type.
* It can implement the Factory Method design pattern.
* Define a method like create_question(question_type, data) that takes the question type (string) and data specific to that type (e.g., options, correct answers) and returns a new Question object of the corresponding subclass (SingleChoiceQuestion, MultipleChoiceQuestion, etc.).
#### 3.2 Question FactoryManager:

* This class can act as a facade for creating questions using the Question Factory.
* It can provide a user-friendly interface for Teachers to select the question type and enter relevant data during quiz creation.
* It will internally call the Question's Factory create_question method to handle object creation based on the chosen type. 
#### Benefits of using Question Factory and Manager:

* Separation of concerns: Question logic is encapsulated within specific question subclasses.
* Code re-usability: The factory pattern promotes code reuse by creating questions based on type.
* Flexibility: New question types can be added by extending the Question class hierarchy without modifying existing code.
* Manageability: The Question FactoryManager simplifies question creation for Teachers within the user interface.


###### Base implementation is here

```javascript
class Question {
  constructor(type) {
    if (this.constructor === Question) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.type = type;
  }

  /**
   * Gets the question from the source.
   *
   * @param {void}
   * @return {unknown} the question
   */
  getQuestion() {}
  
  /**
   * Retrieves the answer key based on the question type.
   *
   * @return {type} The answer key in a format that varies based on the question type.
   */
  getAnswerKey() {} // Answer format varies based on question type.
}
```
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
###### and

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

> Prototype pattern and Builder pattern for Course Module

### Description: As a Teacher (course author), I should be able to create and manage the structure and content of online courses in a user-friendly and efficient way. This includes defining the course outline, adding lessons, assigning content assets, and configuring quizzes.
#### Sub-tasks for Implementing CoursePrototype and CourseBuilder:

#### 1. Course Structure and Data Model:

#### 1.1 Define a Course Model:

* Class `Course` will represent the overall structure and metadata of a course.
* It should include attributes like:
  * title (string): The main title of the course.
  * description (string): A detailed description of the course content and learning objectives.
  * instructor_id (string): Foreign key referencing the User table (identifies the course author).
  * category (string): Optional field to categorize the course by subject or skill focus.
  * lessons (list): An empty list initially, to be populated with Lesson objects during course creation.
#### 1.2 Define a Lesson Model:

* This class `Lesson` will represent individual learning modules within a course.
* It should include attributes like:
  * title (string): The title of the specific lesson.
  * order (number): The sequential order of the lesson within the course.
  * content (string): Optional field for storing basic text content for the lesson.
  * content_asset_id (string): Optional foreign key referencing the Content Asset table (to link external resources).
  * quiz_id (string): Optional foreign key referencing the Quiz table (to associate a quiz with the lesson).
#### 2. CoursePrototype:

#### 2.1 Purpose: This component will serve as creating a clone of course object.
#### 2.2 Functionalities:
* Provide pre-defined course structures with sample lesson outlines (optional).
* Allow Teachers to customize the prototype by adding, removing, or reordering lessons.
* Offer options to link existing content assets (e.g., PDFs, videos) to specific lessons.
* Enable the creation of new lessons within the prototype structure.
#### 3. CourseBuilder:

#### 3.1 Purpose: This component will be the main interface for Teachers to build their courses.
#### 3.2 Functionalities:
* Allow Teachers to access and manage existing CoursePrototype drafts or create new courses from scratch.
* Facilitate the addition of lessons, including assigning titles, order, and content.
* Integrate with the Content Asset Management system to allow seamless linking of resources to lessons.
* Provide functionality for configuring quizzes within lessons or as separate course assessments (linking to the Quiz Management system).
* Enable previewing the course structure and content before finalization and publishing.
#### 4. Benefits of using CoursePrototype and CourseBuilder:

* Streamlined course creation: Provides a structured approach for building courses, improving efficiency.
* Flexibility: Teachers can leverage pre-defined prototypes or customize their own structures.
* Content organization: Enables easy organization of lessons, content assets, and quizzes within a course.
* User-friendly interface: Simplifies the course creation process for Teachers.


###### Base implementation is here

```javascript
/**
 * Facilitates course creation by allowing the addition, editing, reordering, and linking of lessons.
 *
 * @class CourseBuilder
 */
class CourseBuilder {
  /**
   * Creates a CourseBuilder instance with a reference to an existing Course object (optional).
   * If no course is provided, a new Course object will be created.
   *
   * @constructor
   * @param {Course} [course] - An optional Course object to serve as the foundation for course creation.
   */
  /**
   * Creates a CourseBuilder instance with a reference to the base CoursePrototype.
   *
   * @constructor
   * @param {CoursePrototype} coursePrototype - The CoursePrototype object serving as the foundation for course creation.
   */
  constructor(coursePrototype) {
    this.course = coursePrototype.clone(); // Create a working copy of the course structure
  }

  /**
   * Adds a new Lesson object to the course with specified properties.
   *
   * @method
   * @param {string} title - The title of the new lesson.
   * @param {number} order - The sequential order of the lesson within the course.
   * @param {string} [content] - Optional textual content for the lesson. Defaults to an empty string.
   * @param {string} [contentAssetId] - Optional foreign key referencing a content asset (e.g., PDF, video).
   * @param {string} [quizId] - Optional foreign key referencing a quiz associated with the lesson.
   * @returns {CourseBuilder} - This object instance for method chaining.
   */
  addLesson(title, order, content = "", contentAssetId = "", quizId = "") {
    return this; // Allow method chaining for better readability
  }

  /**
   * Edits an existing lesson within the course structure by index.
   * Throws an error if an invalid lesson index is provided.
   *
   * @method
   * @param {number} lessonIndex - The index of the lesson to be edited.
   * @param {string} newTitle - The new title for the lesson (optional, defaults to the existing title).
   * @param {string} [newContent] - Optional new content for the lesson (defaults to the existing content).
   * @param {string} [newContentAssetId] - Optional new content asset ID (defaults to the existing ID).
   * @param {string} [newQuizId] - Optional new quiz ID (defaults to the existing ID).
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If an invalid lesson index is provided.
   */
  editLesson(
          lessonIndex,
          newTitle,
          newContent = "",
          newContentAssetId = null,
          newQuizId = null
  ) {
    return this; // Allow method chaining
  }

  /**
   * Reorders existing lessons within the course by swapping their positions.
   * Throws an error if invalid lesson indices are provided.
   *
   * @method
   *  @param {number} fromIndex - The original index of the lesson to be moved.
   *  @param {number} toIndex - The target index where the lesson should be placed.
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If invalid lesson index provided for reordering
   */
  reorderLessons(fromIndex, toIndex) {
    return this; // Allow method
  }
  /**
   * Links a content asset (e.g., PDF, video) to a specific lesson by index.
   * Throws an error if an invalid lesson index is provided.
   *
   * @method
   * @param {number} lessonIndex - The index of the lesson to link the content asset to.
   * @param {string} contentAssetId - The foreign key referencing the content asset.
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If an invalid lesson index provided for linking content asset
   */
  linkContentAsset(lessonIndex, contentAssetId) {
    return this; // Allow method chaining
  }

  /**
   * Links a quiz to a specific lesson by index.
   * Throws an error if an invalid lesson index is provided.
   *
   * @method
   * @param {number} lessonIndex - The index of the lesson to link the quiz to.
   * @param {string} quizId - The foreign key referencing the quiz.
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If an invalid lesson index provided for linking quiz
   */
  linkQuiz(lessonIndex, quizId) {
    return this; // Allow method chaining
  }

  /**
   * Retrieves the final course object after all customizations are complete.
   *
   * @method
   * @returns {Course} - The final Course object with the instructor-defined structure.
   */
  getCourse() {
    return this.course;
  }

  /**
   * Resets the course builder to its initial state.
   *
   * @method
   * @returns {CourseBuilder} - This object instance for method chaining.
   */
  reset() {
    return this;
  }

  /**
   * Sets the title of the course.
   *
   * @method
   * @param {string} title - The title of the course.
   * @returns {CourseBuilder} - This object instance for method chaining.
   */
  setTitle(title) {
    return this;
  }

  /**
   *
   * @param description
   * @returns {CourseBuilder}
   */
  setDescription(description) {
    return this;
  }
}
```
```javascript
const { Lesson } = require("~/domains/Lesson");
const uuid = require("uuid");
const { COURSE_CATEGORY_TYPES } = require("~/__constants__");

/**
 * Represents a course model within the online learning platform.
 *
 * @class
 */
class Course {
  /**
   * Creates a new Course object.
   *
   * @constructor
   * @param {string} title - The title of the course.
   * @param {string} description - A detailed description of the course content and objectives.
   * @param {string} instructorId - The ID of the instructor who created the course.
   * @param {string} [category] - An optional category to classify the course by subject or skill.
   */
  constructor(title, description, instructorId, category) {
  }

  /**
   * Adds a valid Lesson object to the course's lesson list.
   *
   * @method
   * @param {Lesson} lesson - The Lesson object to be added to the course.
   * @throws {Error} - If an invalid object is provided.
   */
  addLesson(lesson) {
  }

  /**
   * Calculates and returns the total number of lessons currently in the course.
   *
   * @method
   * @returns {number} - The total number of lessons in the course.
   */
  getTotalLessons() {
  }
}

module.exports = Course;

```
###### and

```javascript
class CoursePrototype {
  /**
   * Creates a new CoursePrototype object.
   *
   * @constructor
   * @param {string} title - The title of the course prototype.
   * @param {string} description - A detailed description of the course content and objectives.
   * @param {string} instructorId - The ID of the instructor who created the course.
   * @param {string} [category] - An optional category to classify the course by subject or skill.
   * @param {Lesson[]} lessonTemplates - An array of Lesson objects representing the lesson structure.
   */
  constructor(title, description, instructorId, category, lessonTemplates) {
  }

  /**
   * Creates a new Course object based on the current CoursePrototype.
   *
   * @method
   * @returns {Course} - A new Course object with a copy of the lesson structure.
   */
  clone() {
    return newCourse;
  }
}

  
```
### Lab3 ###

> Strategy pattern for Lesson Module, Command pattern for

### Description: As a Teacher (course author), I should be able I want to choose a delivery method (e.g., video lecture, interactive exercise) for each lesson in my course, so I can cater to different learning styles and content types.
#### Sub-tasks for Implementing Lesson Strategy and CourseBuilder:

#### 1.1 Implement Lesson Delivery Strategy
* Design an interface element for instructors to select a delivery method during course creation or editing. This could be a dropdown menu, radio buttons, or another suitable UI component.
* Implement logic to populate the selection options with available delivery strategies (e.g., VideoLectureStrategy, InteractiveExerciseStrategy, TextContentStrategy).
* Update the Lesson class constructor to accept a deliveryStrategy parameter corresponding to the chosen delivery method.

#### 1.2: As a student, I want to see the lesson content delivered according to the chosen strategy, so I can learn effectively.
* Modify the course delivery or display logic to retrieve the assigned deliveryStrategy from the current lesson object.
* Based on the retrieved strategy type, call the appropriate deliverLesson() method on the strategy object. This ensures the system executes the specific logic for video lectures, interactive exercises, or text content.
* Update the user interface to reflect the chosen delivery method (e.g., display a video player for video lectures, present interactive elements for exercises, or render formatted text content).

#### User Story 1.3: As a Teacher, I want to be able to extend the system with new delivery strategies (e.g., simulations, case studies), so I can offer a wider range of learning experiences.

* Maintain the abstract base class LessonDeliveryStrategy with the deliverLesson() method signature.
* Create new concrete strategy subclasses for each additional delivery method (e.g., SimulationStrategy, CaseStudyStrategy). These classes inherit from LessonDeliveryStrategy and implement their specific deliverLesson() logic.
* Ensure the system can dynamically identify and utilize new strategy classes based on their names or configuration settings.

#### Benefits:
* By decomposing these user stories into subtasks, you create a clear roadmap for implementing the Lesson Delivery Strategy.
* Each subtask focuses on a specific aspect of the functionality, making development more manageable.
* This breakdown allows for easier testing and debugging of the implemented features.

### Implementation
#### 1. Define Abstract Base Class - LessonDeliveryStrategy:

This class defines the contract for different lesson delivery methods. It will have an abstract method deliverLesson() that concrete subclasses must implement.

```javascript
/**
 * Abstract base class defining the contract for lesson delivery strategies.
 * Concrete subclasses must implement the `deliverLesson()` method for specific delivery logic.
 */

class LessonDeliveryStrategy {
  /**
   * Abstract method that concrete subclasses must implement to deliver the lesson content
   * according to their specific delivery method (e.g., video lecture, interactive exercise).
   */
  deliverLesson() {} // Abstract method for specific delivery logic
}
```


#### 2. Define Concrete Delivery Strategy Subclasses:

These subclasses inherit from `LessonDeliveryStrategy` and implement the deliverLesson() method according to their specific delivery methods. Here are some examples:

* VideoLectureStrategy:
  * deliverLesson(): This method might handle fetching the video URL, displaying a video player, and managing playback controls.
* InteractiveExerciseStrategy:
  * deliverLesson(): This method could involve presenting the interactive element (e.g., quiz, simulation), handling user interactions, and providing feedback.
* TextContentStrategy:
  * deliverLesson(): This method might simply display the text content in a formatted and readable manner.

#### 3. Extend the `Lesson` class to include a property deliveryStrategy of type LessonDeliveryStrategy. This allows each lesson to have a specific delivery method assigned. 

#### 4. Utilize Strategy in Lesson Delivery:
When displaying or delivering a lesson within the course, retrieve the assigned deliveryStrategy from the `Lesson` object.
Call the `deliverLesson()` method on the retrieved strategy object. This ensures the system executes the delivery logic specific to that lesson's chosen strategy.

```javascript
function displayLesson(lesson) {
  lesson.deliveryStrategy.deliverLesson();
}
```
> Observer pattern for Course Module

### User Story 1: As an Administrator, I want to be notified when a student completes my course, so I can stay informed and potentially offer additional support.

* Implement the `CourseCompletionObserver` interface with a method for handling course completion notifications.
* Modify the `Course` class to store registered observers and provide methods for adding, removing, and notifying them.

### User Story 2: As an Administrator, I want the course completion notification system to be flexible and extensible, so I can add new notification methods (e.g., SMS, push notifications) in the future.

* Design concrete observer classes that handle different notification methods (e.g., EmailNotification, SMSNotification).
* Ensure the Course class interacts with observers through the common CourseCompletionObserver interface, allowing for easy addition of new notification types.


### User Story 3: As an Administrator, I want to have control over receiving course completion notifications, so I can choose which notifications I prefer.
* Implement functionality for instructors to register and unregister for course completion notifications within the course management interface.
* Update the `Course` class's observer registration and un registration methods to handle instructor actions.

### Implementations
#### 1. Define Observer Interface:
```javascript
/**
 * Interface defining an observer for course completion notifications.
 */
class CourseCompletionObserver {
  /**
   * Method called when a course is completed, allowing the observer to handle the notification.
   *
   * @param course - The Course object that has been completed.
   */
  onCourseCompletion(course){}
}
```
#### 2. Extend Course Class with new methods and private field observers:
* `registerObserver`
* `unregisterObserver`
* `notifyCourseCompletion`

#### 3.Create Concrete Observer Class (Email Notification)
```javascript
/**
 * Concrete observer class that handles course completion notifications by sending an email.
 * (Simulates email functionality for demonstration purposes).
 */
class EmailNotification extends CourseCompletionObserver {
  onCourseCompletion(course: Course) {
    console.log(`Sending email notification for course completion: "${course.title}"`);
    // (Simulate sending email to instructor)
  }
}
```

> Command Pattern for Course Module

#### User Story 1: As an Administrator, I want to edit the title of my courses, so I can keep them up-to-date and accurately reflect their content.

* Create an `UpdateCourseTitleCommand` class that takes the course ID and the new title as arguments.
* Implement the `execute()` method in `UpdateCourseTitleCommand` to:
  * Find the course by ID.
  * Update the course title with the provided new title.
  * Save the updated course data.
* Modify the `Course` class to include a method `setEditCommand` that takes a CourseEditCommand object.
* Implement a method `executeEditCommand` in the `Course` class that:
  * Checks if there's a stored `editCommand`. 
  * If a command exists, calls its `execute()` method to perform the edit.
  * Clears the stored `editCommand` after execution.
  * Update the course editing interface to allow instructors to enter a new title and trigger the `executeEditCommand` method on the course object.
#### User Story 2: As an Administrator, I want to add new lessons to my courses, so I can expand on the covered topics and provide more learning materials.

* Create an `AddLessonCommand` class that takes the course ID and the lesson object as arguments.
* Implement the `execute()` method in `AddLessonCommand` to:
  * Find the course by ID.
  * Add the provided lesson object to the course's lesson list.
  * (Simulate) Save the updated course data.
* Reuse the `setEditCommand` and `executeEditCommand` methods from User Story 1 for adding lessons.
* Update the course editing interface to allow instructors to create new lessons and trigger the `executeEditCommand` method with an AddLessonCommand object on the course.

#### User Story 3: As an Administrator, I want to remove unnecessary lessons from my courses, so I can keep the content focused and avoid overwhelming students.

* Create a `DeleteLessonCommand` class that takes the course ID and the lesson ID as arguments.
* Implement the execute() method in DeleteLessonCommand to:
  * Find the course by ID.
  * Find the lesson with the provided ID within the course's lesson list.
  * Remove the found lesson from the course.
  * (Simulate) Save the updated course data.
* Reuse the setEditCommand and executeEditCommand methods from User Story 1 for deleting lessons.
* Update the course editing interface to allow instructors to select lessons and trigger the executeEditCommand method with a DeleteLessonCommand object on the course.


#### Implementation

#### 1 Define Command Interface (class)

```javascript
class CourseActionsCommand {
  execute() {}; // Method to execute the specific course editing action
}
```

#### 2. Concrete Command Classes:
Create concrete command classes for each editing action:

* `UpdateCourseTitleCommand`
* `AddLessonCommand`
* `DeleteLessonCommand`

```javascript
class UpdateCourseTitleCommand extends CourseActionsCommand {
  constructor(courseId, newTitle) {}

  execute() {}
}
```
```javascript
class AddLessonCommand extends CourseActionsCommand {
  constructor(courseId,lesson) {}

  execute() {}
}
```
```javascript
class DeleteLessonCommand extends CourseActionsCommand {
  constructor(courseId,lesson) {}

  execute() {}
}
```
#### 3. Modify Course Class:

```javascript 
class Course {
   _editCommand=undefined;

  setEditCommand(command: CourseEditCommand) {
    this.editCommand = command;
  }

  executeEditCommand() {
    if (this.editCommand) {
      this.editCommand.execute();
      this.editCommand = undefined; // Clear the command after execution
    } else {
      console.warn("No edit command set!");
    }
  }
  
}
```
### Lab4 ###
> Macro commands and Template method for Content Template Module

####  User Story 1: As a Teacher, I want to create different types of course content (lectures, quizzes, etc.) using predefined templates, so I can ensure consistency and follow best practices.

#### Step to implementations
* Create an abstract class `ContentTemplate` with a template method `generateContent`.
* Define an interface `ContentTemplateStep` with an abstract method execute.
* Create concrete subclasses of `ContentTemplate` (e.g., LectureTemplate, QuizTemplate).
* Implement the `generateContent` method in each template subclass. This method will be the template method defining the overall workflow.
* Within `generateContent`, call specific `ContentTemplateStep` objects in a defined order according to the content type (e.g., DefineLearningObjectivesStep, CreateContentStep, AddAssessmentStep).
* Create concrete implementations of `ContentTemplateStep` for each step in the workflow (e.g., DefineLearningObjectivesStepImpl, CreateContentStepImpl, AddAssessmentStepImpl).
* Implement the `execute` method in each step implementation, encapsulating the specific logic for that step (e.g., prompting the user to define objectives, creating content sections, adding quizzes).
#### User Story 2: As a content creator, I want to customize the content generation process for specific templates by adding or removing steps, so I can tailor the workflow to different content needs.

* Allow concrete template subclasses to override specific steps within the `generateContent` method. This allows for customization of the workflow for specific content types.
* Provide options for content creators to add or remove steps from the predefined workflow within the chosen template.

#### Implementation in code 
```javascript 
/**
 * Represents a template for generating content.
 *
 * This class follows the Template Method pattern, defining a
 * general structure for content generation while allowing subclasses
 * to provide specific steps.
 */
class ContentTemplate {
  /**
   * Creates a new ContentTemplate instance.
   *
   * @param {string} name - The name of the content template.
   * @param {ContentTemplateStep[]} steps - An array of ContentTemplateStep objects
   *   defining the steps involved in generating the content.
   */
  constructor(name, steps) {
    this.name = name;
    this.steps = steps;
  }

  /**
   * Generates the content based on the defined steps.
   *
   * This method iterates through the `steps` array and calls the `execute`
   * method on each `ContentTemplateStep` object. The `execute` method
   * is responsible for performing the specific content generation logic.
   */
  generateContent() {
    for (const step of this.steps) {
      step.execute();
    }
  }
}
```

```javascript
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
    execute(): {};
}
```

```javascript
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
  execute() {}
}
```
```javascript
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
  execute() {}
}
```
```javascript
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
  execute() {}
}
```
### Lab 5###
> Iterator pattern for Lesson Module

#### User Stories:

#### 1 As a student, I want to be able to access a list of all lessons in a course in their order of presentation.
* This user story directly relates to iterating through the lessons in the order they appear in the course curriculum. The LessonIterator can be used to achieve this by simply iterating through the lesson array in the Course class.
#### 2 As a student, I want to be able to navigate through individual lessons within a course, going from the current lesson to the next or previous one.

* This user story requires more control over the iteration process. You can potentially create a different iterator subclass or extend the existing one to provide specific methods like currentLesson() or goToNextLesson().
#### 3 As an Administrator, I want to be able to easily add new lessons to a course without affecting the way students access existing lessons.

* The Iterator pattern promotes loose coupling, ensuring that code using the Course class doesn't need to be modified when new lessons are added. The getLessons() method will simply return an iterator that includes the new lesson.
#### 4 As an administrator, I want to be able to rearrange the order of lessons within a course to customize the learning flow.
* This user story requires updating the internal order of the lessons array in the Course class. Any iterator subsequently obtained via getLessons() will reflect the rearranged order.
#### 5 (Optional) As an administrator, I want to be able to restrict access to specific lessons in a course based on student progress or other criteria.
* This user story involves filtering the lessons presented to the student. You could potentially create a custom iterator that filters the lesson array based on access rules before returning it to the client code.

#### Step to implementation
#### 1. Create the Iterator Class:

```javascript
/**
 * This class provides a basic structure for an iterator.
 *
 * It's intended to be extended by specific iterator implementations
 * that define how to iterate over a particular collection of elements.
 *
 * While JavaScript doesn't have a built-in `Iterator` class, this
 * can be used as a base class to implement custom iterators.
 */
class Iterator {
  /**
   * Creates a new Iterator instance.
   *
   * Subclasses should typically not override this constructor.
   */
  constructor() {}

  /**
   * Abstract method that must be implemented by subclasses.
   *
   * This method returns the next element in the iteration or `undefined`
   * if there are no more elements.
   *
   * @returns {any} - The next element in the iteration or `undefined`.
   */
  next() {
    throw new Error("next() method must be implemented by subclasses");
  }

  // Optional methods (useful for some use cases)

  /**
   * Optional method that checks if there are more elements remaining in the iteration.
   *
   * Subclasses can implement this method to provide additional information about
   * the iteration state.
   *
   * @returns {boolean} - True if there are more elements, false otherwise.
   */
  hasNext() {}

  /**
   * Optional method that resets the iterator to the beginning of the iteration.
   *
   * Subclasses can implement this method to allow restarting the iteration.
   */
  reset() {}
}
```
#### 2.Create the LessonIterator Class:

```javascript
/**
 * Iterator class for iterating over lessons in a course.
 *
 * This class implements the Iterator interface, allowing clients to
 * use a for...of loop or other iteration mechanisms to access lessons
 * sequentially.
 */
class LessonIterator {
  /**
   * Creates a new LessonIterator instance.
   *
   * @param {Lesson[]} lessons - Array of Lesson objects representing the lessons
   *   in the course.
   */
  constructor(lessons) {
    /**
     * Current index pointing to the next lesson in the iteration.
     */
    this._currentIdx = 0;
    /**
     * Array containing all lessons in the course.
     */
    this._lessons = lessons;
  }

  /**
   * Implements the `next()` method of the Iterator interface.
   *
   * Returns the next lesson object in the iteration or `undefined`
   * if there are no more lessons.
   *
   * @returns {IteratorResult<Lesson, any>} - An object with properties
   *   `done` (boolean) indicating if iteration is complete and `value`
   *   (Lesson | undefined) containing the next lesson or `undefined`.
   */
  next() {}

  // Optional methods (useful for some use cases)
  /**
   * Checks if there are more lessons remaining in the iteration.
   *
   * @returns {boolean} - True if there are more lessons, false otherwise.
   */
  hasNext() {}

  /**
   * Resets the iterator to the beginning of the lesson array.
   */
  reset() {}
}
```
* This `LessonIterator` class implements the `Iterator` interface.
* It maintains a reference to an array of Lesson objects and a current index.
* The `next()` method returns the next lesson object (or undefined if there are no more lessons) and increments the index.
* Optional methods like `hasNext()` and `reset()` can be added for specific use cases.

#### 3.Implement the `Lesson` Iterator in the `Course` Class:
```javascript
class Course {
  getLessons(): LessonIterator {
    return new LessonIterator(this.lessons);
  }
}
```
> State pattern for Lesson Module

#### 1 As a student, I want to be able to see the current progress of a lesson I'm enrolled in.

* This user story directly relates to retrieving the current state of the lesson using the getState() method in the Lesson class. The user interface can display the state label (e.g., "Not Started", "In Progress", "Completed") based on the returned state object.

#### 1 As a student, I want to be able to mark a lesson as completed when I've finished working on it.

* This user story involves calling the completeLesson() method on the Lesson object. This method delegates the logic to the current state object, ensuring appropriate behavior based on the current progress stage.
#### 1 As a student, if I revisit a completed lesson, I should not be able to accidentally mark it as completed again.
* This user story highlights the benefit of leveraging different state objects. The CompletedState implementation of completeLesson() can handle this scenario by displaying a message or performing no action, preventing accidental resets.
#### 4 (Optional) As an instructor, I want to be able to track the overall progress of students enrolled in my course.
* This user story requires additional functionalities beyond the current state pattern implementation. You might need a separate mechanism to track individual student progress and aggregate it for the entire course. The lesson state information could be used as a building block for this functionality.

#### Steps to implementation

#### State Interface:
```javascript
/**
 * Interface representing a state of a lesson in terms of user progress.
 *
 * This interface defines methods that each concrete state should implement
 * to handle the specific functionalities associated with that progress stage.
 */
class LessonState {
  /**
   * Returns a human-readable label for the current state.
   *
   * @returns {string} - The name of the current state (e.g., "Not Started", "In Progress", "Completed").
   */
  getStateLabel() {}

  /**
   * Handles the logic for completing a lesson or transitioning to the next state.
   *
   * This method might update the lesson state or interact with other components
   * depending on the specific state implementation.
   *
   * @param {Lesson} lesson - The lesson object for which progress is being managed.
   * @returns {void}
   */
  completeLesson(lesson) {}
}
```
#### 2. Concrete State Classes:
* `NotStartedState`
* `InProgressState`
* `CompletedState`

```javascript
/**
 * Represents the state where the user hasn't started the lesson.
 */
class NotStartedState extends LessonState {
  constructor() {
    super(LESSON_STATES.NOT_STARTED, InProgressState);
  }
}
```

```javascript
class InProgressState extends LessonState {
  constructor() {
    super(LESSON_STATES.IN_PROGRESS, CompletedState);
  }
}
```
```javascript
/**
 * Represents the state where the user has completed the lesson.
 */
class CompletedState extends LessonState {
  constructor() {
    super(LESSON_STATES.COMPLETED, CompletedState); // Stay in Completed state
  }
}
```

#### 3. Add to `Lesson` Class with `State Management`:
```javascript
/**
 * Represents a learning module within a course.
 *
 * @class
 */
class Lesson {
  
  constructor() {
    this.state = new NotStartedState(); // Initial state
  }

  /**
   * Sets the current state of the lesson.
   *
   * @param {LessonState} state - The new state object for the lesson.
   */
  setState(state) {
    this.state = state;
  }

  /**
   * Returns the current state of the lesson progress.
   *
   * @returns {LessonState} - The current state object of the lesson.
   */
  getState() {
    return this.state;
  }

  /**
   * Transitions the lesson state to the next state in the sequence.
   *
   * This method delegates the logic to the current state object through
   * the `next()` method of the current `LessonState`.
   */
  nextState() {
    this.state = this.state.next();
  }

  /**
   * Allows the user to mark the lesson as completed.
   *
   * This method delegates the logic to the current state object.
   */
  completeLesson() {}
}
```
> Chain of responsibility pattern for Payments model

#### 1 As a student, I want to enroll in a course using my preferred payment method (Mastercard, PayPal, GooglePay, Apple Pay) so that I can access the course materials.

#### Acceptance criteria:
* The system should display a list of available payment methods.
* The student should be able to select their preferred payment method.
* The system should attempt to process the payment using the chosen method.
* If the chosen payment method has insufficient funds, the system should attempt to use a secondary payment method if configured (chain of responsibility).
* The system should provide clear feedback to the student on the payment status (success, failure, insufficient funds).
* Upon successful payment, the student should be enrolled in the course.
#### 2 As an administrator, I want to be able to configure the order in which payment methods are attempted during enrollment so that I can prioritize preferred payment methods.

#### Acceptance criteria:
* The system should allow administrators to define the order of payment methods attempted during enrollment (e.g., Mastercard first, then PayPal).
* The administrator should be able to see the currently configured order of payment methods.
#### 3 As a developer, I want to easily integrate new payment methods into the system using the chain of responsibility pattern so that the system can adapt to new payment technologies.

#### Acceptance criteria:
* The code should be well-structured and utilize the chain of responsibility pattern for payment processing.
* Adding a new payment method class should involve minimal changes to existing code.
* The new payment method class should inherit from the base `PaymentProcessor` class and implement the required methods.

#### Steps to implementation

#### 1 Create `Payment` interface 
```javascript
/**
 * This abstract class represents a base payment method. Subclasses should implement the
 * specific logic for each payment type.
 */
class Payment {
  /**
   * Creates a new Payment object.
   */
  constructor() {
    /** (Optional) Stores the name of the payment method (e.g., "Mastercard", "PayPal"). */
    this.name = undefined;

    /** (Optional) Stores the current balance available in the payment method (if applicable). */
    this.balance = undefined;
  }

  /**
   * This method must be implemented by subclasses to determine if the payment method has
   * sufficient funds to cover a specific amount.
   * @param {number} amount - The amount to be checked against the processor's balance.
   * @throws {Error} - An error is thrown if this method is not implemented by a subclass.
   * @returns {boolean} - True if the payment method has enough balance, false otherwise.
   */
  canPay(amount) {
    throw new Error("canPay() method must be implemented by subclasses");
  }

  /**
   * (Optional) This method can be implemented by subclasses to perform the actual payment
   * processing logic (e.g., API calls).
   */
  pay() {}

  /**
   * (Optional) This method can be implemented by subclasses to support a chain of responsibility
   * pattern, allowing the delegation of payment attempts to another payment processor if this
   * one fails.
   *
   * @param {Payment} nextPayment - The next payment processor in the chain.
   */
  setNext(nextPayment) {}

  /**
   * (Optional) This method can be implemented by subclasses to show the actual payment
   */
  show() {}
}
```

#### 2 Implement `PaymentProcessor` class
```javascript
/**
 * This class represents a payment processor with the ability to delegate payments
 * to another account if insufficient funds are available.
 */
class PaymentProcessor extends Payment {
  /**
   * Attempts to pay the specified order price using this processor.
   *
   * @param {number} orderPrice - The total price of the order.
   */
  pay(orderPrice) {}

  /**
   * Checks if the processor has sufficient balance to cover the specified amount.
   *
   * @param {number} amount - The amount to be checked against the processor's balance.
   * @returns {boolean} - True if the processor has enough balance, false otherwise.
   */
  canPay(amount) {}

  /**
   * Sets the next payment processor in the chain to delegate payments to if this
   * processor has insufficient funds.
   *
   * @param {Payment} account - The next processor to handle payments.
   */
  setNext(account) {}

  /**
   * This method can be implemented by subclasses to show the actual payment
   *
   */
  show() {
    console.log(JSON.stringify(this, null, 2));
  }
}
```
#### 3 Implement subclasses
* `MasterCard`
* `PayPal`
* `ApplePay`
* `GooglePay`

```javascript
/**
 * Inherits from the base PaymentProcessor class and represents an Apple Pay payment processor.
 */
class ApplePay extends PaymentProcessor {
  /**
   * Creates a new Apple Pay processor instance.
   *
   * @param {number} balance - The initial balance available in the Apple Pay account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.APPLE_PAY;
    this.balance = balance;
  }
}
```
```javascript
/**
 * Inherits from the base PaymentProcessor class and represents a GooglePay payment processor.
 */
class GooglePay extends PaymentProcessor {
  /**
   * Creates a new GooglePay processor instance.
   *
   * @param {number} balance - The initial balance available in the GooglePay account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.GOOGLE_PAY;
    this.balance = balance;
  }
}
```
```javascript
/**
 * Inherits from the base PaymentProcessor class and represents a Mastercard payment processor.
 */
class MasterCard extends PaymentProcessor {
  /**
   * Creates a new MasterCard processor instance.
   *
   * @param {number} balance - The initial balance available in the Mastercard account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.MASTER_CARD;
    this.balance = balance;
  }
}
```
```javascript
/**
 * Inherits from the base PaymentProcessor class and represents a PayPal payment processor.
 */
class PayPal extends PaymentProcessor {
  /**
   * Creates a new PayPal processor instance.
   *
   * @param {number} balance - The initial balance available in the PayPal account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.PAY_PAL;
    this.balance = balance;
  }
}
```

#### 4 Implement `User` class

```javascript
/**
 * Represents a user object within the online course platform.
 */
class User {
  /**
   * Creates a new User object.
   *
   * @param {string} userId - The unique identifier for the user (optional, system generated).
   * @param {string} username - The username the user will use for login.
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password (hashed for security).
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   * @param {('ADMINISTRATOR'|'TEACHER'|'STUDENT')} role - The user's role within the platform (e.g., "Student", "Teacher", "Administrator").
   * @param {PAYMENT_TYPES} balance - The user's current balance (optional).
   * @param {Date} createdAt - The date and time the user was created (optional).
   */
  constructor(
          userId,
          username,
          email,
          password,
          firstName,
          lastName,
          role,
          balance = {},
          createdAt = new Date()
  ) {
    this._id = userId || uuid.v4(); // Generate random ID if not provided
    this.username = username;
    this.email = email;
    this.password = password; // (assuming password is already hashed)
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.balance = {
      [PAYMENT_TYPES.MASTER_CARD]: balance?.[PAYMENT_TYPES.MASTER_CARD] || 0,
      [PAYMENT_TYPES.PAY_PAL]: balance?.[PAYMENT_TYPES.PAY_PAL] || 0,
      [PAYMENT_TYPES.APPLE_PAY]: balance?.[PAYMENT_TYPES.APPLE_PAY] || 0,
      [PAYMENT_TYPES.GOOGLE_PAY]: balance?.[PAYMENT_TYPES.GOOGLE_PAY] || 0,
    };
    this._createdAt = createdAt;
  }

  /**
   * Returns the user's current balance.
   * @param {('MASTER_CARD'|'PAY_PAL'|'APPLE_PAY'|'GOOGLE_PAY')|undefined} paymentType - The user's role within the platform (e.g., "Student", "Teacher", "Administrator").
   * @returns {number} - The user's balance.
   */
  getBalance(paymentType) {}
}
```
#### 5 Extend class `Course` with price field and getPrice method
```javascript
class Course {
  /**
   * Creates a new Course object.
   *
   * @constructor
   * @param {string} title - The title of the course.
   * @param {string} description - A detailed description of the course content and objectives.
   * @param {string} instructorId - The ID of the instructor who created the course.
   * @param {string} [category] - An optional category to classify the course by subject or skill.
   * @param {string} price - Price of the course.
   */
  constructor(title, description, instructorId, category, price) {
    this.title = title || "Default title";
    this.description = description || "Default title";
    this.instructorId = instructorId || uuid.v4();
    this.category = category || COURSE_CATEGORY_TYPES.LIFE_STYLE;
    this.price = price || 0;
    /**
     * @type {Lesson[]}
     * @public
     */
    this.lessons = []; // Array to store Lesson objects
  }

  /**
   * Get the price.
   *
   * @return {number} - The price of the course
   */
  getPrice() {
    return this.price;
  }
}
```

### Lab 6 ###
> Interpreter patter for Expression Module
 
#### User stories:
#### As a Teacher

* I want to define learning paths based on user performance data (e.g., quiz scores, module completion) so that I can personalize the learning experience.
* I want to be able to use logical operators (AND, OR) in learning path conditions so that I can create complex requirements for path access.
* I want to use comparison operators (greater than, less than, equal to) to evaluate user data in learning path conditions so that I can create targeted learning experiences.
* I want to be able to reference user data variables (e.g., quiz scores, completion flags) in learning path conditions so that I can dynamically adapt learning paths based on user progress.

#### As a Student

* I want to see a clear path through the learning material based on my performance so that I can efficiently progress through the course.
* I want to be directed to the most appropriate learning path based on my current knowledge and skills so that I can focus on areas where I need the most improvement.
* I want to be able to understand why I am placed on a specific learning path so that I can see the connection between my performance and the recommended learning activities.

#### Steps to implementation

#### 1. Implement  Interface for an `Expression`

```javascript
class Expression {
  /**
   * Evaluates the expression based on the provided context (e.g., user performance data).
   *
   * @param {object} context The context object containing user data.
   * @returns {boolean} The evaluation result (true if the expression is met, false otherwise).
   */
  evaluate(context) {}
}
```

#### 2. Implement Base class for representing a `BinaryExpression`
```javascript
/**
 * Base class for representing binary expressions used in learning path conditions.
 * These expressions combine two other expressions using operators (e.g., AND, OR).
 */
class BinaryExpression extends Expression {
  /**
   * The left operand of the binary expression.
   * @type {Expression}
   */
  left;

  /**
   * The right operand of the binary expression.
   * @type {Expression}
   */
  right;

  /**
   * Creates a new BinaryExpression instance.
   *
   * @param {Expression} left The left operand of the expression.
   * @param {Expression} right The right operand of the expression.
   */
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  /**
   * This method should be implemented by subclasses to define how the binary expression is evaluated.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} The evaluation result (true or false based on the operator and operands).
   */
  evaluate(context) {}
}
```


#### 3. Implement sub classes for different expressions

* `AndExpression`
* `OrExpression`
* `ComparisonExpression`
* `LiteralExpression`
* `VariableExpression`

```javascript
class VariableExpression extends Expression {
  /**
   * The name of the variable to be retrieved from the context.
   * @type {string}
   */
  variable;
  /**
   * Creates a new VariableExpression instance.
   *
   * @param {string} variableName The name of the variable to be retrieved.
   */
  constructor(variableName) {
    super();
    this.variableName = variableName;
  }

  /**
   * Evaluates the variable expression by retrieving the value from the context.
   *
   * @param {object} context The context object containing user data.
   * @returns {any} The value of the variable from the context (or false if the variable is missing).
   */
  evaluate(context) {}
}
```
```javascript
class LiteralExpression extends Expression {
  /**
   * The literal value.
   * @type {any}
   */
  value = undefined;

  /**
   * Creates a new LiteralExpression instance.
   *
   * @param {any} value The literal value.
   */
  constructor(value) {
    super();
    this.value = value;
  }

  /**
   * Evaluates the literal expression (simply returns the value).
   *
   * @param {object} context The context object (unused for literal expressions).
   * @returns {any} The literal value.
   */
  evaluate(context) {}
}
```
```javascript
class ComparisonExpression extends Expression {
  /**
   * The comparison operator (e.g., ===, !==, >=, <=, >, <).
   * @type {string}
   */
  operator;

  /**
   * The expected value for the comparison.
   * @type {any}
   */
  expectedValue;

  /**
   * Creates a new ComparisonExpression instance.
   *
   * @param {string} operator The comparison operator.
   * @param {any} expectedValue The expected value for the comparison.
   */
  constructor(operator, expectedValue) {
    super();
    this.operator = operator;
    this.expectedValue = expectedValue;
  }

  /**
   * Evaluates the comparison expression based on the provided context.
   *
   * @param {object} context The context object containing user data.
   * @returns {boolean} The comparison result (true if the condition holds, false otherwise).
   */
  evaluate(context) {
    const variableValue = context[this.variableName] || 0; // Handle missing variables with default (e.g., 0 for numbers)
    switch (this.operator) {
      default:
        throw new Error(`Unsupported comparison operator: ${this.operator}`);
    }
  }
}
```

```javascript
class AndExpression extends BinaryExpression {
  /**
   * Evaluates the AND expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} True if both left and right operands evaluate to true, false otherwise.
   */
  evaluate(context) {}
}
```
```javascript
class OrExpression extends BinaryExpression {
  /**
   * Evaluates the OR expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} True if either left or right operand evaluates to true, false otherwise.
   */
  evaluate(context) {}
}
```

#### 4. Implement `LearningPathInterpreter` class

```javascript
class LearningPathInterpreter {
  /**
   * @typedef {Object.<string, function(Expression, Expression): Expression>} OperatorMap
   */
  /**
   * Map of operators to functions that create the corresponding expression objects.
   * @type {OperatorMap}
   */
  operators = {};

  /**
   * Creates a new LearningPathInterpreter instance.
   */
  constructor() {
    this.operators = {
      "&&": (left, right) => new AndExpression(left, right),
      "||": (left, right) => new OrExpression(left, right),
      "==": (variableName, value) =>
              new ComparisonExpression(variableName, "===", value),
      "!=": (variableName, value) =>
              new ComparisonExpression(variableName, "!==", value),
      ">=": (variableName, value) =>
              new ComparisonExpression(variableName, ">=", value),
      "<=": (variableName, value) =>
              new ComparisonExpression(variableName, "<=", value),
      ">": (variableName, value) =>
              new ComparisonExpression(variableName, ">", value),
      "<": (variableName, value) =>
              new ComparisonExpression(variableName, "<", value),
    };
  }

  /**
   * Parses a string representing a learning path condition into an Expression object.
   *
   * @param {string} condition The learning path condition string.
   * @returns {Expression} The parsed Expression object.
   */
  parse(condition) {}

  /**
   * Evaluates a learning path condition based on the provided context (e.g., user performance data).
   *
   * @param {string} condition The learning path condition string.
   * @param {object} context The context object containing user data.
   * @returns {boolean} The evaluation result (true if the condition is met, false otherwise).
   */
  evaluate(condition, context) {}
}
```

#### 5. Implement `ConditionalExpression` class

```javascript
class ConditionalExpression extends Expression {
  /**
   * The condition to be evaluated.
   * @type {string}
   */
  condition;

  /**
   * The content to be displayed if the condition evaluates to true.
   * @type {Expression}
   */
  trueContent;

  /**
   * The content to be displayed if the condition evaluates to false.
   * @type {Expression}
   */
  falseContent;

  /**
   * Creates a new ConditionalExpression instance.
   *
   * @param {string} condition The condition string to be evaluated.
   * @param {Expression} trueContent The content to display if the condition is true.
   * @param {Expression} falseContent The content to display if the condition is false.
   */
  constructor(condition, trueContent, falseContent) {
    super();
    this.condition = condition;
    this.trueContent = trueContent;
    this.falseContent = falseContent;
  }

  /**
   * Evaluates the conditional expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} The evaluated content (content from trueContent or falseContent).
   */
  evaluate(context) {}
}
```
> Mediator patter for Expression Module
