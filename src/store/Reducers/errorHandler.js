import { ERROR_MSG, ERROR_MSG_RESET } from "../../constants/ActionTypes";
const DEFAULT_STATE = null;

const errorHandler = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ERROR_MSG_RESET:
      return null;
    case ERROR_MSG:
      return payload;
    default:
      return state;
  }
};

export default errorHandler;
