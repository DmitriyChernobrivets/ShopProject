import api from "../../service/api";
import {
  GET_PRODUCT_ID,
  GET_PRODUCT_ID_FAILURE,
  PRODUCT_ID_PRELOADER,
  RESET_STORE_BY_ID
} from "../../constants/ActionTypes";

const getProductId = payload => {
  return {
    type: GET_PRODUCT_ID,
    payload: payload
  };
};
const RESET = () => {
  return {
    type: RESET_STORE_BY_ID
  };
};
const PRELOADER = () => {
  return {
    type: PRODUCT_ID_PRELOADER
  };
};

const onError = payload => {
  return {
    type: GET_PRODUCT_ID_FAILURE,
    payload
  };
};
const fetchProductById = url => {
  return async dispatch => {
    dispatch(RESET()) || dispatch(PRELOADER());
    try {
      const { data } = await api.getProductById(url);

      !data.Error ? dispatch(getProductId(data.product)) : dispatch(onError(data.Error));
    } catch (err) {
      dispatch(onError(err.message));
    }
  };
};

export { fetchProductById };
