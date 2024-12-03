import model from "./model.js";
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createAssignment(assignment) {
    delete assignment._id
    return model.create(assignment);
}
export function deleteAssignment(assignmentID) {
    console.log("Reached dao.deleteAssignment. assignmentID is " + assignmentID);
    console.log("Calling model.deleteOne");
    return model.deleteOne({ _id: assignmentID });
}
export function updateAssignment(assignmentID, assignmentUpdates) {
    return model.updateOne({ _id: assignmentID }, assignmentUpdates);
}