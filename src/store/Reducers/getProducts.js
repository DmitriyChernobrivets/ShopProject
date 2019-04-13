import {
  GET_PRODUCTS,
  TURN_ON_PRELOADER,
  GET_PRODUCTS_FAILURE,
  RESET_STORE_ALL_PRODUCTS,
  EMPTY_PRODUCT_LIST
} from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  products: [],
  preloader: false,
  error: null
};

const getProductsReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case RESET_STORE_ALL_PRODUCTS:
      return { ...DEFAULT_STATE };
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...payload],
        error: null,
        preloader: false
      };
    case TURN_ON_PRELOADER:
      return { ...state, preloader: true };

    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: payload,
        preloader: false
      };
    case EMPTY_PRODUCT_LIST:
      return { products: [], preloader: false, error: "No matches founded!" };
    default:
      return state;
  }
};

export default getProductsReducer;
