import api from "../../service/api";
import { NotificationManager } from "react-notifications";
import { validateInputs } from "../../helpers/functions";

const getItems = payload => {
  return {
    type: "GET_FEEDBACK_ITEMS",
    payload
  };
};

const onError = payload => {
  return {
    type: "ERROR_FEEDBACK",
    payload
  };
};
const onSuccess = payload => {
  return {
    type: "SUCCESS_SENDED_FEEDBACK",
    payload
  };
};
const getFeedbackItems = id => {
  return dispatch => {
    api
      .getFeedbackItems(id)
      .then(res =>
        res.error ? dispatch(onError(res.data.error)) : dispatch(getItems(res.data.feedback))
      )
      .catch(err => dispatch(onError(err.message)));
  };
};

const sendFeedback = payload => {
  const isValid = validateInputs(payload);
  if (isValid) {
    NotificationManager.error("Incorrect inputs, bro!! :(");
    return onError("Wrong Inputs");
  }

  return dispatch => {
    api
      .sendFeedback(payload)
      .then(() => dispatch(onSuccess()) && NotificationManager.success("FEEDBACK SENDED, Yahoo!"))
      .catch(
        err =>
          dispatch(onError(err.message)) &&
          NotificationManager.error("Im busy , Try again later :(")
      );
  };
};

export { getFeedbackItems, sendFeedback };
