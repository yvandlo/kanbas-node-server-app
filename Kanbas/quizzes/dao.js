import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}
export const findQuizzesByCourseId = (cid) => model.find({ "course": cid });
export const findQuizById = (mid) => model.findById(mid);
export const updateQuiz = (mid, quiz) => model.updateOne({ _id: mid }, { $set: quiz });
export const publishQuiz = (mid) => model.updateOne({ _id: mid }, { $set: { published: true } });
export const deleteQuiz = (mid) => model.deleteOne({ _id: mid });