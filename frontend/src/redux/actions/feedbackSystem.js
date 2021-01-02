import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function feedbackSystem(content, resolve = () => {}) {
  store.dispatch({
    type: types.FEEDBACK_SYSTEM,
  });
  return fetch(
    `http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/feedback`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: getAuth().token,
      },
      body: JSON.stringify(content),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.FEEDBACK_SYSTEM_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.FEEDBACK_SYSTEM_FAILED,
      });
    });
}
