import { ERROR_MSG, CHANGE_SIGN_TAB } from "../constants/ActionTypes";

const ErrorHandler = store => next => action => {
  if (typeof action.payload === "string" && action.type !== CHANGE_SIGN_TAB) {
    store.dispatch({ type: ERROR_MSG });
    return;
  } else {
    next(action);
  }
};

export default ErrorHandler;
