const initialState = {
  products: [],
  error: null
};

const getProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: [...payload],
        error: null
      };
    case "ERROR":
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default getProductsReducer;
