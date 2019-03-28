const initialState = {
  products: [],
  preloader: false,
  error: null
};

const getProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: [...payload],
        error: null,
        preloader: false
      };
    case "TURN_ON_PRELOADER":
      return { ...state, preloader: true };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        error: payload,
        preloader: false
      };
    default:
      return state;
  }
};

export default getProductsReducer;
