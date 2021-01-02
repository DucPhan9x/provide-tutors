import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function removeStudent(id, resolve = () => {}) {
  store.dispatch({
    type: types.REMOVE_STUDENT,
  });
  return fetch(
    `http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/admin/list-student/remove/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: getAuth().token,
      },
      // body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.REMOVE_STUDENT_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.REMOVE_STUDENT_FAILED,
      });
    });
}
