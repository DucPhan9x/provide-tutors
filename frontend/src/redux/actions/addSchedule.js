import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function addSchedule(data, resolve = () => {}) {
  store.dispatch({
    type: types.ADD_SCHEDULE_API,
  });
  return fetch("http://localhost:5000/v1/api/tutor/add-schelule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${getAuth().token}`,
      token: getAuth().token
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.ADD_SCHEDULE_API_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.ADD_SCHEDULE_API_FAIL,
      });
    });
}
