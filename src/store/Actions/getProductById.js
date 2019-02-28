import axios from "axios";
// import onError from "./Error";

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
export const fetchProductById = url => {
  return dispatch => {
    axios
      .get(`${url}`)
      .then(({ data }) => {
        if (data.status === "OK") {
          dispatch(getProductId(data.product));
        } else dispatch(onError(data.Error));
      })
      .catch(err => dispatch(onError(err.message)));
  };
};
