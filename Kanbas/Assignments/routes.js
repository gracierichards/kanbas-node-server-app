import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        console.log("Reached AssignmentRoutes delete route, assignmentID is " + assignmentID);
        console.log("Calling dao.deleteAssignment");
        const status = await dao.deleteAssignment(assignmentID);
        console.log("Status of delete: " + status);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const newAssignment = await dao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(newAssignment);
      });
}