const initialState = {
  total: 0,
  items: []
};

const bucketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT_TOTAL":
      return { ...state, total: state.total + payload };
    case "DECREMENT_TOTAL":
      return { ...state, total: state.total - payload };
    case "GET_ITEMS":
      return { ...state, total: 0, items: payload };
    case "ADD_TO_BUCKET":
      return { ...state };
    case "DELETE_ITEM":
      return { ...state, total: state.total - payload.price, items: payload.newItems };
    default:
      return state;
  }
};

export default bucketReducer;
