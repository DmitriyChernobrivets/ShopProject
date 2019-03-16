import axios from "axios";
import api from "../../module/api";
import { transformState } from "../../helpers/functions";

const setProducts = payload => {
  return {
    type: "GET_PRODUCTS",
    payload
  };
};
const setCurrentFilters = payload => {
  return {
    type: "SET_FILTERS",
    payload
  };
};
const onError = payload => {
  console.log(payload);
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
        data.Error ? dispatch(onError(data.Error)) : dispatch(setProducts(data.products))
      )
      .catch(err => dispatch(onError(err.message)));
  };
};
export const getFilteredProducts = data => {
  const currentfilters = transformState(data);
  console.log(currentfilters);
  const url = window.location.pathname;

  return dispatch => {
    dispatch(setCurrentFilters(currentfilters));
    api
      .get_filtered_products(url, currentfilters)
      .then(({ data }) =>
        data.Error ? dispatch(onError(data.Error)) : dispatch(setProducts(data.products))
      )
      .catch(err => dispatch(onError(err.message)));
  };
};
