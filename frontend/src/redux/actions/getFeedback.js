import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function getFeedback(tutorId, resolve = () => {}) {
  store.dispatch({
    type: types.GET_FEEDBACK,
  });
  return fetch(
    `http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/admin/feedbacks`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: getAuth().token,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.GET_FEEDBACK_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.GET_FEEDBACK_FAILED,
      });
    });
}
