import axios from "axios";
import { generateQuery } from "../../helpers/functions";
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
      .then(({ data }) =>
        data.Error ? dispatch(onError(data.Error)) : dispatch(actionProducts(data.products))
      )
      .catch(err => dispatch(onError(err.message)));
  };
};
export const getFilteredProducts = data => {
  const query = generateQuery(data);
  const url = window.location.pathname + query;

  return dispatch =>
    axios
      .get(url)

      .then(({ data }) =>
        data.Error ? dispatch(onError(data.Error)) : dispatch(actionProducts(data.products))
      )
      .catch(err => dispatch(onError(err.message)));
};
