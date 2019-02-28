import axios from "axios";
// import onError from "./Error";

const actionProducts = payload => {
  return {
    type: "GET_PRODUCTS",
    payload
  };
};

const onError = payload => {
  return {
    type: "GET_PRODUCTS_FAILURE",
    error: payload
  };
};
export const getProducts = category => {
  return dispatch => {
    axios
      .get(`/category/${category}`)
      .then(({ data }) => console.log(data) || dispatch(actionProducts(data.products)))
      .catch(err => console.log(err) || dispatch(onError(err.message)));
  };
};
