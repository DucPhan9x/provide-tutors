import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function studentRemoveScheduleRegister(id, resolve = () => {}) {
  store.dispatch({
    type: types.STUDENT_REMOVE_SCHEDULE_REGISTER,
  });
  return fetch(`http://localhost:5000/v1/api/student/del-register/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: getAuth().token,
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.STUDENT_REMOVE_SCHEDULE_REGISTER_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.STUDENT_REMOVE_SCHEDULE_REGISTER_FAILED,
      });
    });
}
