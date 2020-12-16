import * as types from "../constants";
import store from "../store";

export function openModalMessage(data) {
  const defaultData = { title: "", body: "", timeout: 3000 };
  store.dispatch({
    type: types.OPEN_MODAL_MESSAGE,
    payload: { ...defaultData, ...data },
  });
}

export function closeModalMessage() {
  store.dispatch({
    type: types.CLOSE_MODAL_MESSAGE,
  });
}
