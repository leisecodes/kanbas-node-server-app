import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const module = await dao.createModule(cid, req.body);
        res.json(module);
    };

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };

    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
        return;
    };

    const findModulesByCourse = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModulesByCourse(cid);
        res.json(modules);
        return;
    }

    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };

    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/modules", findAllModules);
    app.get("/api/courses/:cid/modules", findModulesByCourse);
    app.put("/api/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);

}