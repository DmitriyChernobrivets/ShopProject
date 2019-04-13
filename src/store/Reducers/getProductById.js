import {
  GET_PRODUCT_ID,
  GET_PRODUCT_ID_FAILURE,
  PRODUCT_ID_PRELOADER,
  RESET_STORE_BY_ID
} from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  product: null,
  error: null,
  loading: false
};

const getProductByIdReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case RESET_STORE_BY_ID:
      return DEFAULT_STATE;
    case GET_PRODUCT_ID:
      return {
        ...state,
        product: { ...payload },
        error: null,
        loading: false
      };
    case GET_PRODUCT_ID_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case PRODUCT_ID_PRELOADER:
      return {
        ...state,

        loading: true
      };
    default:
      return state;
  }
};

export default getProductByIdReducer;
