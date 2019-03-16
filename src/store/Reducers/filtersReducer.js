const initialState = { sort: "" };

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_FILTERS":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default filterReducer;
