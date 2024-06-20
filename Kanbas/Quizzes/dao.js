import model from "./model.js";
export const createQuiz = (cid, quiz) => {
  const newQuiz = new model({
    name: quiz.title,
    description: quiz.description,
    type: quiz.type,
    points: quiz.points,
    course: cid,
    shuffle: quiz.shuffle,
    timeLimit: quiz.timeLimit,
    multipleAttempts: quiz.multipleAttempts,
    numAttempts: quiz.numAttempts,
    showAnswers: quiz.showAnswers,
    accessCode: quiz.accessCode,
    oneQuestion: quiz.oneQuestion,
    webcam: quiz.webcam,
    lockQuestions: quiz.lockQuestions,
    dueDate: quiz.dueDate,
    availableDate: quiz.availableDate,
    untilDate: quiz.untilDate,
    questions: quiz.questions
  })
    return model.create(newQuiz);
  }
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findById(quizId);  
export const findQuizzesByCourse = ( cid ) => model.find({course : cid});
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });