import mongoose from "mongoose";

const question = new mongoose.Schema({
    type: { type: String, default: "Multiple" },
    title: String,
    points: Number,
    question: String,
    slots: [String],
    answer: Boolean,
});

const quizSchema = new mongoose.Schema({
    //id: { type: String, required: true, unique: true },

    title: { type: String, required: true },
    description: String,
    published: { type: Boolean, default: false },
    course: String,
    quiztype: { type: String, default: "Graded Quiz" },
    points: { type: Number, default: 0 },
    assignmentgroup: { type: String, default: "Quizzes" },
    shuffleanswers: { type: Boolean, default: true },
    timelimit: { type: Number, default: 20 },
    multipleattempts: { type: Boolean, default: false },
    showcorrectanswers: Boolean,
    accesscode: { type: String, default: "" },
    onequestionatatime: { type: Boolean, default: true },
    webcamrequired: { type: Boolean, default: false },
    lockquestionsafteranswering: { type: Boolean, default: false },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: { type: [question], default: [] },
}, { collection: "quizzes" });
export default quizSchema;