import model from "./model.js";
export const createQuiz = (cid) => {
  const newQuiz = new model({
    name: "New Quiz",
    dueDate : new Date(),
    availableDate : new Date(),
    untilDate : new Date(),
    course: cid
  })
    return model.create(newQuiz);
  }
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findById(quizId);  
export const findQuizzesByCourse = ( cid ) => model.find({course : cid});
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });