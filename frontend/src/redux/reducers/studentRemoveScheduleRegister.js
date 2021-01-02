import * as types from "../constants";

const initialState = {
  data: {},
  error: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.STUDENT_REMOVE_SCHEDULE_REGISTER:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case types.STUDENT_REMOVE_SCHEDULE_REGISTER_SUCCEED:
      return {
        ...state,
        data: actions.payload,
        loading: false,
      };
    case types.STUDENT_REMOVE_SCHEDULE_REGISTER_FAILED:
      return {
        ...state,
        error: actions.payload,
        loading: false,
      };

    default:
      return state;
  }
}
