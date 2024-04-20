//import db from "../Database/index.js";
import * as dao from "./dao.js";
function QuestionRoutes(app) {
    const deleteQuestion = async (req, res) => {
        const { mid } = req.params;
        await dao.deleteQuestion(mid);
        res.sendStatus(200);
    };

    const createQuestion = async (req, res) => {
        const { cid } = req.params;
        const newQuestion = {
            ...req.body,
            quiz: cid,
        };
        const question = await dao.createQuestion(newQuestion);
        res.send(question);
    };

    const updateQuestion = async (req, res) => {
        const { mid } = req.params;
        await dao.updateQuestion(mid, req.body);
        res.sendStatus(204);
    };

    const findQuestionsByQuiz = async (req, res) => {
        const { cid } = req.params;
        const users = await dao.findQuestionsByQuizId(cid);
        res.send(users);
    };

    const findQuestionById = async (req, res) => {
        const { qid } = req.params;
        const users = await dao.findQuestionById(qid);
        res.send(users);
    };

    const totalPointsForQuiz = async (req, res) => {
        const { qid } = req.params;
        const users = await dao.findQuestionsByQuizId(qid);
        const totalpoints = users.reduce((acc, curr) => acc + curr.points, 0);
        //console.log(totalpoints);
        res.send({ points: totalpoints });
    }

    const deleteQuestionByQuizId = async (req, res) => {
        const { qid } = req.params;
        await dao.deleteQuestionByQuizId(qid);
        res.sendStatus(200);
    }

    app.delete("/api/questions/:mid", deleteQuestion);
    app.delete("/api/quizzes/:qid/questions", deleteQuestionByQuizId);
    app.get("/api/quizzes/:cid/questions", findQuestionsByQuiz);
    app.get("/api/quizzes/:qid/questions/points", totalPointsForQuiz);
    app.get("/api/questions/:qid", findQuestionById);
    app.put("/api/questions/:mid", updateQuestion);
    app.post("/api/quizzes/:cid/questions", createQuestion);
}
export default QuestionRoutes;