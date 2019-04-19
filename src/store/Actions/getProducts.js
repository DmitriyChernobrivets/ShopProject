import api from "../../service/api";
import {
  GET_PRODUCTS,
  TURN_ON_PRELOADER,
  SET_FILTERS,
  GET_PRODUCTS_FAILURE,
  RESET_FILTERS,
  RESET_STORE_ALL_PRODUCTS,
  EMPTY_PRODUCT_LIST
} from "../../constants/ActionTypes";
import { transformState } from "../../helpers/functions";
import { DEFAULT_STATE } from "../Reducers/filters";

const setProducts = payload => {
  return {
    type: GET_PRODUCTS,
    payload
  };
};
const preLoader = () => {
  return {
    type: TURN_ON_PRELOADER
  };
};
const isEmpty = () => {
  return {
    type: EMPTY_PRODUCT_LIST
  };
};
const setCurrentFilters = payload => {
  return {
    type: SET_FILTERS,
    payload
  };
};
const resetFilters = () => {
  return {
    type: RESET_FILTERS
  };
};
const resetStore = () => {
  return {
    type: RESET_STORE_ALL_PRODUCTS
  };
};
const onError = payload => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload
  };
};

const getProductBySearchInput = data => {
  const SearchQuery = { title: data.value, sort: data.sort };
  const url = window.location.pathname;
  return dispatch => {
    dispatch(preLoader());
    api
      .Search(url, SearchQuery)
      .then(({ data }) => {
        const { product, totalCount } = data;
        if (data.Error) {
          dispatch(onError(data.Error));
        } else if (data.product.length === 0) {
          dispatch(isEmpty());
        } else {
          dispatch(setCurrentFilters({ totalPageCount: totalCount }));
          dispatch(setProducts(product));
        }
      })
      .catch(err => dispatch(onError(err.message)));
  };
};
const getFilteredProducts = (data = DEFAULT_STATE) => {
  const currentfilters = transformState(data);

  const url = window.location.pathname;

  return dispatch => {
    dispatch(preLoader());
    api
      .getProducts(url, currentfilters)
      .then(({ data }) => {
        const { product, totalCount } = data;

        if (data.Error) {
          dispatch(onError(data.Error));
        } else if (data.product.length === 0) {
          dispatch(isEmpty());
        } else {
          dispatch(setCurrentFilters({ ...currentfilters, totalPageCount: totalCount }));
          dispatch(setProducts(product));
        }
      })
      .catch(err => dispatch(onError(err.message)));
  };
};

export { getFilteredProducts, getProductBySearchInput, resetFilters, resetStore };
