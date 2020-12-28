import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function listAdminNeedAccept(data, resolve = () => {}) {
  store.dispatch({
    type: types.LIST_ADMIN_NEED_ACCEPT,
  });
  return fetch("http://localhost:5000/v1/api/admin/list-request", {
    method: "GET",
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
        type: types.LIST_ADMIN_NEED_ACCEPT_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.LIST_ADMIN_NEED_ACCEPT_FAILED,
      });
    });
}
