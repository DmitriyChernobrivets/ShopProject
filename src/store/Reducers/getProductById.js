import { GET_PRODUCT_ID, GET_PRODUCT_ID_FAILURE } from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  product: null,
  error: null
};

const getProductByIdReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_ID:
      return {
        ...state,
        product: { ...payload },
        error: null
      };
    case GET_PRODUCT_ID_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default getProductByIdReducer;
