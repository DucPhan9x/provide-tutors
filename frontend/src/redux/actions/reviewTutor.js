import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function reviewTutor(content, resolve = () => {}) {
  store.dispatch({
    type: types.REVIEW_TUTOR,
  });
  return fetch(`http://localhost:5000/v1/api/student/review-tutor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: getAuth().token,
    },
    body: JSON.stringify(content),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.REVIEW_TUTOR_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.REVIEW_TUTOR_FAILED,
      });
    });
}
