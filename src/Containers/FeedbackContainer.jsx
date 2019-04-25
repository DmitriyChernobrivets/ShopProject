import React from "react";
import { connect } from "react-redux";
import Feedback from "../components/Blocks/Feedback/index";
import { getFeedbacks, getProductById, getFeedbackError } from "../Selectors/common";
import { sendFeedback, getFeedbackItems } from "../store/Actions/feedback";

const FeedbackContainer = props => <Feedback {...props} />;

const getState = state => {
  return {
    items: getFeedbacks(state),
    error: getFeedbackError(state),
    product: getProductById(state)
  };
};
const getDispatcher = dispatch => {
  return {
    getFeedbackItems: id => dispatch(getFeedbackItems(id)),
    sendFeedback: payload => dispatch(sendFeedback(payload))
  };
};
export default connect(
  getState,
  getDispatcher
)(FeedbackContainer);
