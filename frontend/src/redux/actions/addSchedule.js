import * as types from "../constants";
import store from "../store";
export function addSchedule(resolve = () => {}) {
  return fetch("http://localhost:5000/v1/api/tutor/add-schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())

    .catch((error) => {
      console.log(error);
    });
}
export function updateRememberedPath(path) {
  store.dispatch({
    type: types.UPDATE_REMEMBERED_PATH,
    payload: path,
  });
}
