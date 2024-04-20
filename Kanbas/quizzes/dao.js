import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}
export const findQuizzesByCourseId = (cid) => model.find({ "course": cid });
export const findQuizById = (mid) => model.findById(mid);
export const updateQuiz = (mid, quiz) => model.updateOne({ _id: mid }, { $set: quiz });
export const updatePoints = (mid, pointsobj) => model.updateOne({ _id: mid }, { $set: { points: pointsobj } });
export const updateNumberQuestions = (mid, pointsobj) => model.updateOne({ _id: mid }, { $set: { numquestions: pointsobj } });
export const publishQuiz = (mid) => model.updateOne({ _id: mid }, { $set: { published: true } });
export const deleteQuiz = (mid) => model.deleteOne({ _id: mid });