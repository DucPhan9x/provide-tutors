import * as types from "../constants";

const initialState = {
  open: false,
  data: {},
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.OPEN_MODAL_MESSAGE:
      return {
        ...state,
        open: true,
        data: actions.payload,
      };
    case types.CLOSE_MODAL_MESSAGE:
      return {
        ...state,
        open: false,
        data: {},
      };
    default:
      return state;
  }
}
