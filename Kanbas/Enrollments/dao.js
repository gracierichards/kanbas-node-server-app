
  import model from "./model.js";
  export async function findCoursesForUser(userId) {
   const enrollments = await model.find({ user: userId }).populate("course");
   const ret = enrollments.map((enrollment) => enrollment.course);
   //console.log(ret);
   return ret;
  }
  export async function findUsersForCourse(courseId) {
   const enrollments = await model.find({ course: courseId }).populate("user");
   return enrollments.map((enrollment) => enrollment.user);
  }
  export function enrollUserInCourse(user, course) {
    //console.log("Reached Enrollments/dao enrollUserInCourse. user is " + user + " and course is " + course);
    //console.log("Calling Enrollment model.create");
   return model.create({ user, course });
  }
  export function unenrollUserFromCourse(user, course) {
   return model.deleteOne({ user, course });
  }
  