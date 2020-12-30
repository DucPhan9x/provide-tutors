import { getAuth } from "../../utils/helpers";
import * as types from "../constants";
import store from "../store";
export function uploadAvatar(data, resolve = () => {}) {
  store.dispatch({
    type: types.UPLOAD_AVATAR,
  });
  return fetch(
    "http://thuctapcongnhan.australiacentral.cloudapp.azure.com/v1/api/tutor/upload-image",
    {
      method: "POST",
      headers: {
        "Content-type": "multipart/form-data",
        token: getAuth().token,
      },
      body: data,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      store.dispatch({
        payload: data,
        type: types.UPLOAD_AVATAR_SUCCEED,
      });
    })
    .catch((error) => {
      store.dispatch({
        payload: error,
        type: types.UPLOAD_AVATAR_FAILED,
      });
    });
}
