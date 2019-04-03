const DEFAULT_STATE = ["Notebooks", "Telephones", "PCs"];

const categoriesReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    // case "GET_ALL_CATEGORIES":
    //   return state;
    default:
      return state;
  }
};

export default categoriesReducer;
