import * as types from "../constants";
import store from "../store";
export function searchSchedule(type, resolve = () => {}) {
  const renderAPI = () => {
    const subject = type.subject;
    const grade = type.grade;
    if (!subject && !grade) {
      return "";
    }
    if (subject && grade) {
      return `?subject=${subject}&grade=${grade}`;
    }
    if (!subject && grade) {
      return `?grade=${grade}`;
    }
    if (!grade && subject) {
      return `?subject=${subject}`;
    }
  };
  store.dispatch({
    type: types.SEARCH_SCHEDULE,
  });
  return fetch(
    `http://localhost:5000/v1/api/list-schedule/search${renderAPI}`,
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
