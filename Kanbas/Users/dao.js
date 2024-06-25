import model from "./model.js";

export const createUser = (user) => {
    delete user._id
    return model.create(user);
  }
  
export const findAllUsers = () => model.find();
export const findUsersByRole = (role) => model.find({ role: role });
export const findUserById = (userId) => model.findById(userId);
export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
      $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
  };
  
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const getEnrolledCourses = (userId) => model.findById(userId).populate('enrolledCourses');
export const getCreatedCourses = (userId) => model.findById(userId).populate('createdCourses');

export const enrollInCourse = async (userId, courseId) => {
  const user = await model.findById(userId);
  if (!user.enrolledCourses.includes(courseId)) {
    user.enrolledCourses.push(courseId);
    await user.save();
  }
  // Populate the course details before returning
  await user.populate({
    path: 'enrolledCourses',
    match: { _id: courseId }
  }).execPopulate();
  return user.enrolledCourses.find(course => course._id.toString() === courseId);
};

export const unenrollFromCourse = async (userId, courseId) => {
  const user = await model.findById(userId);
  user.enrolledCourses = user.enrolledCourses.filter(id => id !== courseId);
  await user.save();
  return user.enrolledCourses;
};

export const addQuizAttempt = async (userId, attemptData) => {
  const user = await model.findById(userId);
  if (!user) throw new Error('User not found');
  user.quizAttempts.push(attemptData);
  await user.save();
  return user.quizAttempts[user.quizAttempts.length - 1];
};

export const getQuizAttempts = async (userId) => {
  const user = await model.findById(userId).populate('quizAttempts.quiz');
  if (!user) throw new Error('User not found');
  return user.quizAttempts;
};