import model from "./model.js";

export const createQuestion = (question) => {
    delete question._id
    return model.create(question);
}
export const findQuestionById = (mid) => model.findById(mid);
export const findQuestionsByQuizId = (cid) => model.find({ "quiz": cid });
export const updateQuestion = (mid, question) => model.updateOne({ _id: mid }, { $set: question });
export const deleteQuestion = (mid) => model.deleteOne({ _id: mid });