import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    quiz: String,
    type: { type: String, default: "Multiple Choice" },
    title: { type: String, default: "" },
    points: { type: Number, default: 0 },
    question: { type: String, default: "" },
    slots: { type: [String], default: [] },
    correct: { type: Number, default: 0 },
    answer: { type: Boolean, default: false },
}, { collection: "questions" });
export default questionSchema;