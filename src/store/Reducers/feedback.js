const initialState = {
  items: [],
  error: null
};

const feedbackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_FEEDBACK_ITEMS":
      return { ...state, items: payload, error: null };
    case "SUCCESS_SENDED_FEEDBACK":
      return { ...state, error: null };
    case "ERROR_FEEDBACK":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default feedbackReducer;
