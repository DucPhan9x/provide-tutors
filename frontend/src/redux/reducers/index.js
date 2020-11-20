import { combineReducers } from "redux";
import login from "./login";
import modalMessage from "./modalMessage";

export default combineReducers({ login, modalMessage });
