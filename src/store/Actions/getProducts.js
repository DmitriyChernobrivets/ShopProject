import api from "../../service/api";
import {
  GET_PRODUCTS,
  TURN_ON_PRELOADER,
  SET_FILTERS,
  GET_PRODUCTS_FAILURE,
  RESET_FILTERS
} from "../../constants/ActionTypes";
import { transformState } from "../../helpers/functions";

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
const setCurrentFilters = payload => {
  return {
    type: SET_FILTERS,
    payload
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
        } else {
          dispatch(setCurrentFilters({ totalPageCount: totalCount }));
          dispatch(setProducts(product));
        }
      })
      .catch(err => dispatch(onError(err.message)));
  };
};
const getFilteredProducts = data => {
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
        } else {
          dispatch(setCurrentFilters({ ...currentfilters, totalPageCount: totalCount }));
          dispatch(setProducts(product));
        }
      })
      .catch(err => dispatch(onError(err.message)));
  };
};

export { getFilteredProducts, getProductBySearchInput };
