import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentModel" },
    dateAvailable: Date,
    timeAvailable: String,
    dueDate: Date,
    dueTime: String,
    points: Number,
    description: String
 },
 { collection: "assignments" }
);
export default assignmentSchema;