const initialState = {
  product: null,
  error: null
};

const getProductByIdReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCT_ID":
      return {
        ...state,
        product: { ...payload },
        error: null
      };
    case "GET_PRODUCT_ID_FAILURE":
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default getProductByIdReducer;
