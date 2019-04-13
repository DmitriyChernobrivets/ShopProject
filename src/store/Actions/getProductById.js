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
const resetByID = () => {
  return {
    type: RESET_STORE_BY_ID
  };
};
const preLoader = () => {
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
  return dispatch => {
    dispatch(resetByID()) || dispatch(preLoader());
    api
      .getProductById(url)
      .then(({ data }) => {
        if (data.status === "OK") {
          dispatch(getProductId(data.product));
        } else {
          dispatch(onError(data.Error));
        }
      })
      .catch(err => {
        dispatch(onError(err.message));
      });
  };
};

export { fetchProductById };
