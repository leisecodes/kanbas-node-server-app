import model from "./model.js";
export const createCourse = (course) => {
  const timestamp = new Date().getTime().toString();
  const randomSuffix = Math.random().toString(36).substring(2, 7);
  const newCourse = new model({
    _id: timestamp + randomSuffix,
    name: course.name,
    number: course.number,
    startDate: course.startDate,
    endDate: course.endDate,
    department: course.department,
    credits: course.credits,
    image: course.image,
    description: course.description,
  })
    return model.create(newCourse);
  }
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const findCourseByNumber = (number) =>  model.findOne({ number: number });
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });