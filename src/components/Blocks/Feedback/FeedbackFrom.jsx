import React, { Component } from "react";
import "./styles.scss";
import axios from "axios";
import FeedbackItems from "./FeedbackItems";
import { Col, Row } from "react-bootstrap";
import FeedbackInput from "../../Shared/feedbackinput/FeedBackInput";
import { connect } from "react-redux";
import { getFeedbackItems, sendFeedback } from "../../../store/Actions/feedback";

import "react-notifications/lib/notifications.css";

class FeedbackForm extends Component {
  state = {
    name: "",
    comments: "",
    advantages: "",
    disadvantages: ""
  };
  componentDidMount() {
    const { id, getFeedbackItems } = this.props;
    console.log(this.props);
    getFeedbackItems(id);
  }

  sendFeedback = e => {
    e.preventDefault();
    const { _id } = this.props.product;
    const { name, comments, advantages, disadvantages } = this.state;
    const { sendFeedback } = this.props;
    this.setState(
      { isInputsValid: true, name: "", comments: "", advantages: "", disadvantages: "" },
      () => sendFeedback({ name, comments, advantages, disadvantages, product_ID: _id })
    );
  };
  inputHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, comments, advantages, disadvantages } = this.state;
    const { items, error } = this.props;

    return (
      <Row className="feedback">
        <h2 className="feedback-head">
          Feedback <span>{items.length}</span>
        </h2>

        {items.length > 0 && <FeedbackItems feedbacks={items} />}

        <form className="feedback_form" ref={form => (this.form = form)}>
          <Col md={6} lg={5}>
            <FeedbackInput
              title="Enter your name"
              icon="fas fa-user-astronaut"
              inputValue={name}
              onchange={this.inputHandle}
              name="name"
              placeholder="Enter your name"
              isInputsValid={error}
            />
          </Col>
          <Col lg={12}>
            <FeedbackInput
              title="Advantages"
              icon="far fa-thumbs-up"
              inputValue={advantages}
              onchange={this.inputHandle}
              name="advantages"
              placeholder="Enter your feedback here"
              isInputsValid={error}
            />
            <FeedbackInput
              title="Disadvanteges"
              icon="far fa-thumbs-down"
              inputValue={disadvantages}
              onchange={this.inputHandle}
              name="disadvantages"
              placeholder="Enter your feedback here"
              isInputsValid={error}
              textarea
            />
            <FeedbackInput
              title="Comments"
              icon="far fa-comments"
              inputValue={comments}
              onchange={this.inputHandle}
              name="comments"
              placeholder="Enter your feedback here"
              isInputsValid={error}
              textarea
            />
            <button className="feedback_send-btn" onClick={this.sendFeedback}>
              Send Feedback
            </button>
          </Col>
        </form>
      </Row>
    );
  }
}

const getState = state => {
  return {
    items: state.feedback.items,
    error: state.feedback.error,
    product: state.currentProductInfo.product
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
)(FeedbackForm);
