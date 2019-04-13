import { ERROR_MSG } from "../../constants/ActionTypes";
const DEFAULT_STATE = null;

const errorHandler = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ERROR_MSG:
      return "Something Goes wrong :(";
    default:
      return state;
  }
};

export default errorHandler;
