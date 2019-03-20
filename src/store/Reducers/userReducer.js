const initialState = {};

const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "GET_DEFAULT_RIGHTS":
      return { ...state, payload };
    default:
      return state;
  }
};

export default userReducer;
