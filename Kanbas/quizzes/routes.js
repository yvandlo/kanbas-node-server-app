//import db from "../Database/index.js";
import * as dao from "./dao.js";
function QuizRoutes(app) {
    const deleteQuiz = async (req, res) => {
        const { mid } = req.params;
        await dao.deleteQuiz(mid);
        res.sendStatus(200);
    };

    const createQuiz = async (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            ...req.body,
            course: cid,
        };

        const quiz = await dao.createQuiz(newQuiz);
        res.send(quiz);
    };

    const updateQuiz = async (req, res) => {
        const { mid } = req.params;
        await dao.updateQuiz(mid, req.body);
        res.sendStatus(204);
    };

    const findQuizById = async (req, res) => {
        const { qid } = req.params;
        const users = await dao.findQuizById(qid);
        res.send(users);
    };

    const findQuizzesByCourse = async (req, res) => {
        const { cid } = req.params;
        const users = await dao.findQuizzesByCourseId(cid);
        res.send(users);
    };
    app.delete("/api/quizzes/:mid", deleteQuiz);
    app.get("/api/courses/:cid/quizzes", findQuizzesByCourse);
    app.get("/api/quizzes/:qid", findQuizById);
    app.put("/api/quizzes/:mid", updateQuiz);
    app.post("/api/courses/:cid/quizzes", createQuiz);
}
export default QuizRoutes;