import { SET_FILTERS, RESET_FILTERS } from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  title: [],
  memory: [],
  price: { min: 0, max: 150000 },
  sort: "",
  totalPageCount: 1
};

const filterReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case RESET_FILTERS:
      return DEFAULT_STATE;
    case SET_FILTERS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default filterReducer;
