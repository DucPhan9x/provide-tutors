import * as types from "../constants";
import store from "../store";
export function confirmPassword(data, resolve = () => {}) {
  store.dispatch({
    type: types.CONFIRMPASSWORD_API,
  });
  return fetch("http://localhost:5000/v1/api/auth/confirm-code", {
    method: "POST",
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
        type: types.CONFIRMPASSWORD_API_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.CONFIRMPASSWORD_API_FAIL,
      });
    });
}
