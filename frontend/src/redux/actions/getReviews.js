import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function getReviews(tutorId, resolve = () => {}) {
  store.dispatch({
    type: types.GET_REVIEWS,
  });
  return fetch(`http://localhost:5000/v1/api/review/${tutorId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: getAuth().token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.GET_REVIEWS_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.GET_REVIEWS_FAILED,
      });
    });
}
