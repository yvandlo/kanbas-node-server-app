import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        //db.modules = db.modules.filter((m) => m._id !== mid);
        await dao.deleteModule(mid);
        res.sendStatus(200);
    };

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            //_id: new Date().getTime().toString(),
        };
        /*db.modules.push(newModule);
        res.send(newModule);*/
        const module = await dao.createModule(newModule);
        res.send(module);
    };

    const updateModule = async (req, res) => {
        const { mid } = req.params;
        /*const moduleIndex = db.modules.findIndex(
            (m) => m._id === mid);
        db.modules[moduleIndex] = {
            ...db.modules[moduleIndex],
            ...req.body
        };*/
        await dao.updateModule(mid, req.body);
        res.sendStatus(204);
    };



    const findModulesByCourse = async (req, res) => {
        const { cid } = req.params;
        /*const modules = db.modules
            .filter((m) => m.course === cid);
        res.send(modules);*/
        const users = await dao.findModulesByCourseId(cid);
        res.send(users);
    };
    app.delete("/api/modules/:mid", deleteModule);
    app.get("/api/courses/:cid/modules", findModulesByCourse);
    app.put("/api/modules/:mid", updateModule);
    app.post("/api/courses/:cid/modules", createModule);
}
export default ModuleRoutes;