import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function changePassword(data, resolve = () => {}) {
  store.dispatch({
    type: types.CHANGEPASSWORD_API,
  });
  return fetch("http://localhost:5000/v1/api/auth/change-new-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: getAuth().token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.CHANGEPASSWORD_API_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.CHANGEPASSWORD_API_FAIL,
      });
    });
}
