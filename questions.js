export const questions = [
    {
        "QUESTION_ID": 1,
        "QUESTION": "Stack is a linear data structure",
        "QUESTION_TYPE": "MCQ_SINGLE",
        "CREATED_AT": "2023-01-01T12:00:00",
        "CREATED_BY": "Upraised Hiring Team",
        "IS_NEGATIVE_MARKING_ALLOWED": true,
        "IS_PARTIAL_MARK_ALLOWED": false,
        "IS_ACTIVE": true,
        "RESPONSE_DETAILS": ["True", "False"],
        "WEIGHT": 4
    },
    {
        "QUESTION_ID": 2,
        "QUESTION": "Which programming language is known for its versatility?",
        "QUESTION_TYPE": "MCQ_SINGLE",
        "CREATED_AT": "2023-01-02T14:30:00",
        "CREATED_BY": "Upraised Hiring Team",
        "IS_NEGATIVE_MARKING_ALLOWED": false,
        "IS_PARTIAL_MARK_ALLOWED": true,
        "IS_ACTIVE": true,
        "RESPONSE_DETAILS": ["JavaScript", "Java", "Python", "C++"],
        "WEIGHT": 4
    },
    {
        "QUESTION_ID": 3,
        "QUESTION": "HTML is a",
        "QUESTION_TYPE": "MCQ_SINGLE",
        "CREATED_AT": "2023-01-01T12:00:00",
        "CREATED_BY": "Upraised Hiring Team",
        "IS_NEGATIVE_MARKING_ALLOWED": true,
        "IS_PARTIAL_MARK_ALLOWED": false,
        "IS_ACTIVE": true,
        "RESPONSE_DETAILS": ["Scripting Language", "Programming Language", "Markup Language"],
        "WEIGHT": 4
    },
    {
        "QUESTION_ID": 4,
        "QUESTION": "What of the following is/are not a frontend framework/library",
        "QUESTION_TYPE": "MCQ_MULTIPLE",
        "CREATED_AT": "2023-01-01T12:00:00",
        "CREATED_BY": "Upraised Hiring Team",
        "IS_NEGATIVE_MARKING_ALLOWED": true,
        "IS_PARTIAL_MARK_ALLOWED": false,
        "IS_ACTIVE": true,
        "RESPONSE_DETAILS": ["Node.js", "Spring", "Flask", "ReactJS"],
        "WEIGHT": 4
    },
    {
        "QUESTION_ID": 5,
        "QUESTION": "ReactJS is a frontend",
        "QUESTION_TYPE": "MCQ_SINGLE",
        "CREATED_AT": "2023-01-01T12:00:00",
        "CREATED_BY": "Upraised Hiring Team",
        "IS_NEGATIVE_MARKING_ALLOWED": true,
        "IS_PARTIAL_MARK_ALLOWED": false,
        "IS_ACTIVE": true,
        "RESPONSE_DETAILS": ["Library", "Framework", "Language"],
        "WEIGHT": 4
    },
]


export const answers = {
    "1": { "ANSWER": "True", "WEIGHT": 4, "QUESTION_TYPE": "MCQ_SINGLE", },
    "2": { "ANSWER": "Python", "WEIGHT": 4, "QUESTION_TYPE": "MCQ_SINGLE", },
    "3": { "ANSWER": "Markup Language", "WEIGHT": 4, "QUESTION_TYPE": "MCQ_SINGLE", },
    "4": { "ANSWER": ["Node.js", "Spring", "Flask"], "WEIGHT": 4, "QUESTION_TYPE": "MCQ_MULTIPLE", },
    "5": { "ANSWER": "Library", "WEIGHT": 4, "QUESTION_TYPE": "MCQ_SINGLE" },
}
