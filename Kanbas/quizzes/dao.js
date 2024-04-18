import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}
export const findQuizzesByCourseId = (cid) => model.find({ "course": cid });
export const updateQuiz = (mid, quiz) => model.updateOne({ _id: mid }, { $set: quiz });
export const deleteQuiz = (mid) => model.deleteOne({ _id: mid });