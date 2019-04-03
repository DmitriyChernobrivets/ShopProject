import api from "../../service/api";
import {
  GET_PRODUCTS,
  TURN_ON_PRELOADER,
  SET_FILTERS,
  GET_PRODUCTS_FAILURE
} from "../../constants/constants";
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

export const getFilteredProducts = data => {
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
