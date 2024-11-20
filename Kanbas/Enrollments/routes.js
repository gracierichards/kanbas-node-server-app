import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.put("/api/enroll/:courseID/:userID", (req, res) => {
        console.log("Reached Enrollment Routes.js enroll.");
        const { courseID, userID } = req.params;
        console.log("userID variable is " + userID);
        const status = dao.enrollUserInCourse(userID, courseID);
        res.send(status);
    });
    app.delete("/api/enroll/:courseID/:userID", (req, res) => {
        console.log("Reached Enrollment Routes.js unenroll");
        const { courseID, userID } = req.params;
        const status = dao.unenrollUserInCourse(userID, courseID);
        res.send(status);
    });
}