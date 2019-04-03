const DEFAULT_STATE = ["Notebooks", "Mobile", "PCs"];

const categoriesReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    // case "GET_ALL_CATEGORIES":
    //   return state;
    default:
      return state;
  }
};

export default categoriesReducer;
