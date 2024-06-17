import model from "./model.js";
export const createModule = (cid, module) => {
  const timestamp = new Date().getTime().toString();
  const randomSuffix = Math.random().toString(36).substring(2, 7);
  const newModule = new model({
    _id: timestamp + randomSuffix,
    name: module.name,
    description: module.description,
    course: cid,
    lessons: module.lessons
  })
    return model.create(newModule);
  }
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);  
export const findModulesByCourse = ( cid ) => model.find({course : cid});
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });