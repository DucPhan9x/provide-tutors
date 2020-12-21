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
});
