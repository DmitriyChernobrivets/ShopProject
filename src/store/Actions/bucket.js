import { totalPrice } from "../../helpers/functions";
import { NotificationManager } from "react-notifications";
import {
  INCREMENT,
  DECREMENT,
  UPDATE_BUCKET,
  ADD_TO_BUCKET,
  DELETE_ITEM
} from "../../constants/ActionTypes";

const increment = payload => {
  return {
    type: INCREMENT,
    payload
  };
};

const decrement = payload => {
  return {
    type: DECREMENT,
    payload
  };
};
const updateBucket = () => {
  const items = JSON.parse(localStorage.getItem("bucket")) || [];
  const total = totalPrice(items);

  const updatedState = {
    total: total,
    items: items
  };
  return {
    type: UPDATE_BUCKET,
    payload: updatedState
  };
};
const addToBucket = payload => {
  const bucketItem = JSON.parse(localStorage.getItem("bucket")) || [];
  const isDuplicate = bucketItem.find(el => el._id === payload._id);
  if (!isDuplicate) {
    bucketItem.push(payload);
    localStorage.setItem("bucket", JSON.stringify(bucketItem));
    NotificationManager.success("Added to bucket!");
  }

  const total = totalPrice(bucketItem);
  return {
    type: ADD_TO_BUCKET,
    payload: { bucketItem, total }
  };
};

const deleteItem = payload => {
  const items = JSON.parse(localStorage.getItem("bucket"));
  const filteredItems = items.filter(el => el._id !== payload.id);
  localStorage.setItem("bucket", JSON.stringify(filteredItems));
  NotificationManager.success("Deleted!!");

  return {
    type: DELETE_ITEM,
    payload: { newItems: filteredItems, price: payload.price }
  };
};

export { increment, decrement, updateBucket, deleteItem, addToBucket };
