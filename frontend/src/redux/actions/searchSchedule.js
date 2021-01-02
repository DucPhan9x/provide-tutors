import * as types from "../constants";
import store from "../store";
export function searchSchedule(type, resolve = () => {}) {
  store.dispatch({
    type: types.SEARCH_SCHEDULE,
  });
  return fetch(
    `http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/list-schedule/search?subject=${type.subject}&grade=${type.grade}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.SEARCH_SCHEDULE_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.SEARCH_SCHEDULE_FAILED,
      });
    });
}
