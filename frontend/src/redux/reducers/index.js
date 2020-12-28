import { combineReducers } from "redux";
import login from "./login";
import loginAdmin from "./loginAdmin";
import modalMessage from "./modalMessage";
import register from "./register";
import forgotPassword from "./forgotPassword";
import confirmPassword from "./confirmPassword";
import changePassword from "./changePassword";
import schedules from "./schedules";
import addSchedule from "./addSchedule";
import getTutorInfo from "./getTutorInfo";
import getStudentInfo from "./getStudentInfo";
import teachingSchedule from "./teachingSchedule";
import learningSchedule from "./learningSchedule";
import updateTutorInfo from "./updateTutorInfo";
import updateStudentInfo from "./updateStudentInfo";
import getTutorUsers from "./getTutorUsers";
import getStudentUsers from "./getStudentUsers";
import studentRegisterSchedule from "./studentRegisterSchedule";
import listStudentRegister from "./listStudentRegister";
import tutorAccept from "./tutorAccept";
import listAdminNeedAccept from "./listAdminNeedAccept";
import adminAccept from "./adminAccept";
import listScheduleStudentRegister from "./listScheduleStudentRegister";
import getReviews from "./getReviews";

export default combineReducers({
  login,
  modalMessage,
  register,
  forgotPassword,
  confirmPassword,
  changePassword,
  schedules,
  loginAdmin,
  addSchedule,
  getTutorInfo,
  getStudentInfo,
  teachingSchedule,
  learningSchedule,
  updateTutorInfo,
  updateStudentInfo,
  getTutorUsers,
  getStudentUsers,
  studentRegisterSchedule,
  listStudentRegister,
  tutorAccept,
  listAdminNeedAccept,
  adminAccept,
  listScheduleStudentRegister,
  getReviews,
});
