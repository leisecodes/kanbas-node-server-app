import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    name: String,
    description: String,
    isPublished: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ["GRADED QUIZ", "PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"],
        default: "GRADED QUIZ",
    },
    assignmentGroup: {
        type: String,
        enum: ["ASSIGNMENTS", "QUIZZES", "PROJECTS", "EXAMS"],
        default: "QUIZZES",
    },
    points: Number,
    course: String,
    shuffle: {
        type: Boolean,
        default: true 
    },
    timeLimit: {
        type: Number,
        default: 20
    },
    multipleAttempts: {
        type: Boolean,
        default: false
    },
    numAttempts: {
        type: Number,
        default: 1
    },
    showAnswers: {
        type: String,
        enum: ["IMMEDIATELY", "AFTER DUE DATE", "NEVER"],
        default: "NEVER",
    },
    accessCode: String,
    oneQuestion: {
        type: Boolean,
        default: true
    },
    webcam: {
        type: Boolean,
        default: false
    },
    lockQuestions: {
        type: Boolean,
        default: false
    },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: [{
        _id: String,
        title: String,
        questionText: String,
        type: {
            type: String,
            enum: ["MULTIPLE CHOICE", "TRUE/FALSE", "FILL IN"],
            default: "MULTIPLE CHOICE"
        },
        points: Number,
        choices: [{
            _id: String,
            choiceText: String,
            isCorrect: Boolean
        }]

    }],

}, 
{ collection: "quizzes" }
);
export default quizSchema;