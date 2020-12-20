import * as types from "../constants";
import store from "../store";
export function getSchedule(data, resolve = () => {}) {
  store.dispatch({
    type: types.GET_SCHEDULE_API,
  });
  return fetch("http://localhost:5000/v1/api/list-schedule", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.GET_SCHEDULE_API_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.GET_SCHEDULE_API_FAIL,
      });
    });
}
