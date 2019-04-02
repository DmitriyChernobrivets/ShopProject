import { totalPrice } from "../../helpers/functions";

const items = JSON.parse(localStorage.getItem("bucket")) || [];
const total = totalPrice(items);

const initialState = {
  total: total,
  items: items
};

const bucketReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "ADD_TO_BUCKET":
      return {
        ...state,
        items: payload.bucketItem,
        total: payload.total
      };
    case "INCREMENT":
      return { ...state, total: state.total + payload };
    case "DECREMENT":
      return { ...state, total: state.total - payload };
    case "UPDATE_BUCKET":
      return { ...state, ...payload };

    case "DELETE_ITEM":
      return { ...state, total: state.total - payload.price, items: payload.newItems };
    default:
      return state;
  }
};

export default bucketReducer;
