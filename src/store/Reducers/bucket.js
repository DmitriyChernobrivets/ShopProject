import { totalPrice } from "../../helpers/functions";
import {
  INCREMENT,
  DECREMENT,
  UPDATE_BUCKET,
  ADD_TO_BUCKET,
  DELETE_ITEM
} from "../../constants/ActionTypes";

const items = JSON.parse(localStorage.getItem("bucket")) || [];
const total = totalPrice(items);

const DEFAULT_STATE = {
  total: total,
  items: items
};

const bucketReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_BUCKET:
      return {
        ...state,
        items: payload.bucketItem,
        total: payload.total
      };
    case INCREMENT:
      return { ...state, total: state.total + payload };
    case DECREMENT:
      return { ...state, total: state.total - payload };
    case UPDATE_BUCKET:
      return { ...state, ...payload };

    case DELETE_ITEM:
      return { ...state, total: state.total - payload.price, items: payload.newItems };
    default:
      return state;
  }
};

export default bucketReducer;
