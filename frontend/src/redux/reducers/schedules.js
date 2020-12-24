import * as types from "../constants";

const initialState = {
  data: {},
  error: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_SCHEDULE_API:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case types.GET_SCHEDULE_API_SUCCEED:
      return {
        ...state,
        data: actions.payload,
        loading: false,
      };
    case types.GET_SCHEDULE_API_FAIL:
      return {
        ...state,
        error: actions.payload,
        loading: false,
      };
    default:
      return state;
  }
}
