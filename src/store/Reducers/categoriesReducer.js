const initialState = ["Notebooks", "Telephones", "PCs"];

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_CATEGORIES":
      return state;
    default:
      return state;
  }
};

export default categoriesReducer;
