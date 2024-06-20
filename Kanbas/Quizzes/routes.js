import * as dao from "./dao.js";

export default function QuizRoutes(app) {

    const createQuiz = async (req, res) => {
        const { cid } = req.params;
        const quiz = await dao.createQuiz(cid, req.body);
        res.json(quiz);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };

    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
        return;
    };

    const findQuizzesByCourse = async (req, res) => {
        const { cid } = req.params;
        const quizzes = await dao.findQuizzesByCourse(cid);
        res.json(quizzes);
        return;
    }

    const findQuizById = async (req, res) => {
        const {quizId} = req.params;
        const quiz = await dao.findQuizById(quizId);
        res.json(quiz);
        return;
    }

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
        res.json(status);
    };

    app.post("/api/courses/:cid/quizzes", createQuiz);
    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.get("/api/courses/:cid/quizzes", findQuizzesByCourse);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);

}