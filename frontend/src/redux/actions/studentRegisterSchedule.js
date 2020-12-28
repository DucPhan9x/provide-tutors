import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function studentRegisterSchedule(data, resolve = () => {}) {
  store.dispatch({
    type: types.STUDENT_REGISTER_SCHEDULE,
  });
  return fetch("http://localhost:5000/v1/api/student/choose-schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: getAuth().token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.STUDENT_REGISTER_SCHEDULE_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.STUDENT_REGISTER_SCHEDULE_FAIL,
      });
    });
}
