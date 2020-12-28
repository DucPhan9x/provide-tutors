import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function tutorAccept(id, resolve = () => {}) {
  store.dispatch({
    type: types.TUTOR_ACCEPT,
  });
  return fetch(`http://localhost:5000/v1/api/tutor/accept/${id}`, {
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
        type: types.TUTOR_ACCEPT_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.TUTOR_ACCEPT_FAILED,
      });
    });
}
