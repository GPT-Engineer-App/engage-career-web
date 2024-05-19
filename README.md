# engage-career-web

Project Objectives
Develop a user-friendly web application that represents student and institutional engagement in
career-related activities.
The project includes basic UI design, backend and frontend development, testing, and
deployment. Deliverables include a working web application with login access, data entry and
dashboards for various user types and an admin dashboard.
Features:
1. 2 types of login: Student and Placement officer
Student
2. When the student logs in, he should be able to view a questionnaire which needs to be
filled by him. Please consider all the needed validations.
3. The questionnaire should have the following questions:
a. The first segment of the questionnaire will show the details of the students that
needs to be auto-populated on login.
i. Email
ii. Name of Student
iii. Student ID
iv. Stream
v. Photo
b. Have you registered yourself in the campus placement portal?
i. Type of answer: Yes or No
ii. If Yes, text box to enter the Placement ID to be shown. This text box should
not be shown if the Answer is No.
iii. Mandatory field
c. Have you attended any interviews?
i. Type of answer: Yes or No
ii. Non-Mandatory field
d. Choose your area of interest
i. Type of answer: Multiple Choice
ii. Choices: Data analytics, Data Annotation, User Experience,
Cybersecurity, Research
iii. Mandatory field
e. Have you received any job offers?
i. Type of answer: Yes or No
ii. If Yes, the student should be able to upload a supporting document in
either PDF or image format.
iii. Mandatory field
f. By default, all the answers should be No, for those type of questions.
g. Give appropriate messages as needed.
h. Once all the mandatory questions are filled, he can submit the form. Along with
Submit, he should also have an option to Refresh the form.

i. When submitted successfully, a message should appear on a new page, which
says Congratulations! All the best for a wonderful career. This page should have a
‘Home’ button which will take the user to the login page.

Placement officer login
4. When the placement officer logs in, he should be able to see a dashboard. Each stream
will have separate placement officer.
5. The placement officer should be able to see only the student details, of his assigned
stream.
6. The dashboard should contain the following information. Please use different types of
graphs to represent the following information
a. Percentage of students registered on the career placement portal.

90 & above
60 - 90%
30 - 60%
10 - 30%
Below 10%

1000
750
500
250
0
b. Percentage of students who participated in Interviews

90 & above
60 - 90%
30 - 60%
10 - 30%
Below 10%

1000
750
500
250
0

c. Number of students as per the interest area

90 & above
60 - 90%
30 - 60%
10 - 30%
Below 10%

1500
1000
750
500
250

d. Percentage of students who received offer letter

90 & above
60 - 90%
30 - 60%
10 - 30%
Below 10%

1500
1000
750
500
250

7. Based on the above score tables, the total score of the stream should be displayed, along
with the rank of the stream in comparison with the other streams.

Database:
Please design the database after understanding the requirements.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/engage-career-web.git
cd engage-career-web
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
