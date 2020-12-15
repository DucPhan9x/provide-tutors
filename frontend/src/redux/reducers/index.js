import { combineReducers } from "redux";
import login from "./login";
import modalMessage from "./modalMessage";
import register from "./register";
import forgotPassword from "./forgotPassword";
import confirmPassword from "./confirmPassword";
import changePassword from "./changePassword";

export default combineReducers({
  login,
  modalMessage,
  register,
  forgotPassword,
  confirmPassword,
  changePassword,
});
