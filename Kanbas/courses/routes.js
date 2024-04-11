import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {

    const getAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();//Database.courses;
        res.send(courses);
    };

    const createCourse = async (req, res) => {
        /*const course = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.courses.push(course);*/
        const course = await dao.createCourse(req.body);
        res.send(course);
    };

    const deleteCourse = async (req, res) => {
        const { id } = req.params;
        /*Database.courses = Database.courses
            .filter((c) => c._id !== id);*/
        await dao.deleteCourse(id);
        res.sendStatus(204);
    };
    const updateCourse = async (req, res) => {
        const { id } = req.params;
        const course = req.body;
        /*Database.courses = Database.courses.map((c) =>
            c._id === id ? { ...c, ...course } : c
        );*/
        await dao.updateCourse(id, course);
        res.sendStatus(204);
    };

    const findCourseById = async (req, res) => {
        const { id } = req.params;
        /*const course = Database.courses
            .find((c) => c._id === id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }*/
        const course = await dao.findCourseById(id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.send(course);
    };

    app.get("/api/courses", getAllCourses);
    app.delete("/api/courses/:id", deleteCourse);
    app.post("/api/courses", createCourse);
    app.put("/api/courses/:id", updateCourse);
    app.get("/api/courses/:id", findCourseById);
}
