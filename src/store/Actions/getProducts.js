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
  return {
    type: "GET_PRODUCTS_FAILURE",
    error: payload
  };
};

export const getFilteredProducts = data => {
  const currentfilters = transformState(data);

  const url = window.location.pathname;

  return dispatch => {
    api
      .get_filtered_products(url, currentfilters)
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
