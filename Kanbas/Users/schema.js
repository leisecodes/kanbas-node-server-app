import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
        default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: String,
    totalActivity: String,
    enrolledCourses: [{ type: String, ref: 'CourseModel' }],
    createdCourses: [{ type: String, ref: 'CourseModel' }],
    quizAttempts: [{
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizModel' },
        score: Number,
        answers: [{
            question: { type: mongoose.Schema.Types.ObjectId, ref: 'QuestionModel' },
            selectedAnswers: [String], // or you can use ObjectId if answer choices are referenced
            isCorrect: Boolean
        }],
        attemptDate: { type: Date, default: Date.now }
    }]

}, 
{ collection: "users" }
);
export default userSchema;