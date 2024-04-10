import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    return model.create(module);
}
export const findModulesByCourseId = (cid) => model.find({ "course": cid });
export const updateModule = (mid, module) => model.updateOne({ _id: mid }, { $set: module });
export const deleteModule = (mid) => model.deleteOne({ _id: mid });