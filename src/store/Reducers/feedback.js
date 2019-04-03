import {
  GET_FEEDBACK_ITEMS,
  ERROR_FEEDBACK,
  SUCCESS_SENDED_FEEDBACK
} from "../../constants/constants";

const DEFAULT_STATE = {
  items: [],
  error: null
};

const feedbackReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_FEEDBACK_ITEMS:
      return { ...state, items: payload, error: null };
    case SUCCESS_SENDED_FEEDBACK:
      return { ...state, error: null };
    case ERROR_FEEDBACK:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default feedbackReducer;
