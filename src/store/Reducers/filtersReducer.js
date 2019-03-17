const initialState = {
  title: [],
  memory: [],
  price: { min: 0, max: 150000 },
  sort: "",
  totalPageCount: 1
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_FILTERS":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default filterReducer;
