import { ERROR_MSG } from "../constants/ActionTypes";

const ErrorHandler = store => next => action => {
  if (action.payload && action.payload.statusText) {
    store.dispatch({ type: ERROR_MSG, payload: action.payload.statusText });
  } else {
    next(action);
  }
};

export default ErrorHandler;
