import axios from "axios";
import api from "../../service/api";

const getProductId = payload => {
  return {
    type: "GET_PRODUCT_ID",
    payload: payload
  };
};

const onError = payload => {
  return {
    type: "GET_PRODUCT_ID_FAILURE",
    payload
  };
};
const fetchProductById = url => {
  return dispatch => {
    api
      .getProductById(url)
      .then(({ data }) => {
        if (data.status === "OK") {
          dispatch(getProductId(data.product));
        } else dispatch(onError(data.Error));
      })
      .catch(err => dispatch(onError(err.message)));
  };
};

export { fetchProductById };
