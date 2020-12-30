import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function getTutorUsers(data, resolve = () => {}) {
  store.dispatch({
    type: types.GET_TUTORUSERS_API,
  });
  return fetch(
    "http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/admin/list-tutor",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: getAuth().token,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.GET_TUTORUSERS_API_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.GET_TUTORUSERS_API_FAIL,
      });
    });
}
