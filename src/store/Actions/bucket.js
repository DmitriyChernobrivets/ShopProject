const incrementtotalprice = payload => {
  return {
    type: "INCREMENT_TOTAL",
    payload
  };
};

const decrementtotalprice = payload => {
  return {
    type: "DECREMENT_TOTAL",
    payload
  };
};

const addToBucket = payload => {
  const bucketItem = JSON.parse(localStorage.getItem("bucket")) || [];
  const isDuplicate = bucketItem.find(el => el._id === payload._id);
  if (!isDuplicate) {
    bucketItem.push(payload);
    localStorage.setItem("bucket", JSON.stringify(bucketItem));
  }

  return {
    type: "ADD_TO_BUCKET",
    payload: { bucketItem, price: !isDuplicate ? payload.price : 0 }
  };
};

const deleteItem = payload => {
  const items = JSON.parse(localStorage.getItem("bucket"));
  const filteredItems = items.filter(el => el._id !== payload.id);
  localStorage.setItem("bucket", JSON.stringify(filteredItems));
  return {
    type: "DELETE_ITEM",
    payload: { newItems: filteredItems, price: payload.price }
  };
};
const getitems = () => {
  const items = JSON.parse(localStorage.getItem("bucket")) || [];
  return {
    type: "GET_ITEMS",
    payload: items
  };
};
export { incrementtotalprice, decrementtotalprice, getitems, deleteItem, addToBucket };
