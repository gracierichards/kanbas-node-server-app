import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    console.log("Reached dao.enrollUserInCourse. user id is " + userId + " and course id is " + courseId);
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
    return 204;
}
export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(e => !(e.user === userId && e.course === courseId));
    return 204;
  }