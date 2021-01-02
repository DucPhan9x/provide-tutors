import * as types from "../constants";

const initialState = {
  data: {},
  error: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.STUDENT_REGISTER_SCHEDULE:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case types.STUDENT_REGISTER_SCHEDULE_SUCCEED:
      return {
        ...state,
        data: actions.payload,
        loading: false,
      };
    case types.STUDENT_REGISTER_SCHEDULE_FAIL:
      return {
        ...state,
        error: actions.payload,
        loading: false,
      };

    default:
      return state;
  }
}
