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
const EmptyListValdiation = () => {
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

  return async dispatch => {
    dispatch(preLoader());
    try {
      const { data } = await api.Search(url, SearchQuery);
      const { product, totalCount } = data;

      if (data.Error) {
        dispatch(onError(data.Error));
      } else if (data.product.length === 0) {
        dispatch(EmptyListValdiation());
      } else {
        dispatch(setCurrentFilters({ totalPageCount: totalCount }));
        dispatch(setProducts(product));
      }
    } catch (err) {
      dispatch(onError(err.message));
    }
  };
};
const getProducts = () => {
  // const currentfilters = transformState(data);

  const defaulturl = window.location.pathname + window.location.search;
  console.log(defaulturl);
  return async (dispatch, getState) => {
    // const sort = getState().currentFilters.sort;
    dispatch(preLoader());
    try {
      const { data } = await api.getProducts(defaulturl);
      const { product, totalCount } = data;

      if (data.Error) {
        dispatch(onError(data.Error));
      } else if (data.product.length === 0) {
        dispatch(EmptyListValdiation());
      } else {
        // dispatch(setCurrentFilters({ ...currentfilters, totalPageCount: totalCount }));
        dispatch(setProducts(product));
      }
    } catch (err) {
      dispatch(onError(err.message));
    }
  };
};

export { getProducts, getProductBySearchInput, resetFilters, resetStore };
