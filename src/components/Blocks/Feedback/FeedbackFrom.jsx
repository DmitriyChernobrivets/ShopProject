import React, { Component } from "react";
import "./feedback.scss";
import axios from "axios";
import FeedbackItems from "./FeedbackItems";
import { Col, Row } from "react-bootstrap";
import FeedbackInput from "../../Shared/feedbackinput/FeedBackInput";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

class FeedbackForm extends Component {
  state = {
    feedbacks: [],
    name: "",
    comments: "",
    advantages: "",
    disadvantages: "",
    error: null,
    isInputsValid: true
  };
  componentDidMount() {
    const { id } = this.props;

    axios
      .get(`/feedback?id=${id}`)
      .then(this.onSuccess)
      .catch(this.onError);
  }
  sendFeedback = e => {
    e.preventDefault();
    const { id } = this.props;
    this.isInputValid() && this.sendPost(id);
  };

  onSuccess = feedbacks => {
    this.setState({
      feedbacks: feedbacks.data.feedback,
      error: null
    });
  };
  onError = error => {
    this.setState({
      feedbacks: [],
      error: error
    });
  };
  isInputValid = () => {
    const { name, comments, advantages, disadvantages } = this.state;
    if (!name || !comments || !advantages || !disadvantages) {
      this.setState(
        {
          isInputsValid: false,
          name: "",
          comments: "",
          advantages: "",
          disadvantages: ""
        },
        () => NotificationManager.error("Sorry :(", "Invalid inputs")
      );
      return false;
    } else return true;
  };
  sendPost = id => {
    const { name, comments, advantages, disadvantages } = this.state;
    this.setState(
      { isInputsValid: true, name: "", comments: "", advantages: "", disadvantages: "" },
      () => {
        axios
          .post("/feedback", { name, comments, advantages, disadvantages, product_ID: id })
          .then(() => NotificationManager.success("Thanck You", "Comment sended"))
          .catch(() => NotificationManager.error("Error", "Server error"));
      }
    );
  };
  inputHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { feedbacks } = this.state;
    const { name, comments, advantages, disadvantages, isInputsValid } = this.state;

    return (
      <Row className="feedback">
        <h2 className="feedback-head">
          Feedback <span>{feedbacks.length}</span>
        </h2>

        {feedbacks && <FeedbackItems feedbacks={feedbacks} />}

        <form className="feedback_form">
          <Col md={6} lg={5}>
            <FeedbackInput
              title="Enter your name"
              icon="fas fa-user-astronaut"
              inputValue={name}
              onchange={this.inputHandle}
              name="name"
              placeholder="Enter your name"
              isInputsValid={isInputsValid}
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
              isInputsValid={isInputsValid}
            />
            <FeedbackInput
              title="Disadvanteges"
              icon="far fa-thumbs-down"
              inputValue={disadvantages}
              onchange={this.inputHandle}
              name="disadvantages"
              placeholder="Enter your feedback here"
              isInputsValid={isInputsValid}
              textarea
            />
            <FeedbackInput
              title="Comments"
              icon="far fa-comments"
              inputValue={comments}
              onchange={this.inputHandle}
              name="comments"
              placeholder="Enter your feedback here"
              isInputsValid={isInputsValid}
              textarea
            />
            <button className="feedback_send-btn" onClick={this.sendFeedback}>
              Send Feedback
            </button>
          </Col>
        </form>
        <NotificationContainer />
      </Row>
    );
  }
}

export default FeedbackForm;
