import React, { Component } from "react";
import "./feedback.scss";
import axios from "axios";
import FeedbackItems from "./FeedbackItems";
import { Col, Row } from "react-bootstrap";

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
            <label className="feedback_name">
              <i className="fas fa-user-astronaut" />
              Enter your name:
            </label>
            <input
              className={!isInputsValid ? "feedback_name-input error" : "feedback_name-input"}
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={this.inputHandle}
              value={name}
              aria-required="true"
            />
          </Col>
          <Col lg={12}>
            <label>
              <i className="far fa-thumbs-up" />
              Advantages:
            </label>
            <textarea
              className={!isInputsValid ? "feedback_comments error" : "feedback_comments"}
              rows="3"
              name="advantages"
              placeholder="Enter your feedback here"
              onChange={this.inputHandle}
              value={advantages}
            />
            <label>
              <i className="far fa-thumbs-down" />
              Disadvanteges:
            </label>
            <textarea
              className={!isInputsValid ? "feedback_comments error" : "feedback_comments"}
              rows="3"
              name="disadvantages"
              placeholder="Enter your feedback here"
              onChange={this.inputHandle}
              value={disadvantages}
            />
            <label>
              <i className="far fa-comments" />
              Comments:
            </label>

            <textarea
              className={!isInputsValid ? "feedback_comments error" : "feedback_comments"}
              rows="3"
              name="comments"
              placeholder="Enter your feedback here"
              onChange={this.inputHandle}
              value={comments}
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
