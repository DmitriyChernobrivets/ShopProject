import React, { Component, Fragment } from "react";
import "./feedback.scss";
import axios from "axios";
import FeedbackItems from "./FeedbackItems";
import { Col, Row } from "react-bootstrap";

class FeedbackForm extends Component {
  state = {
    feedbacks: [],
    error: null
  };
  componentDidMount() {
    const { id } = this.props;
    axios
      .get(`/feedback?id=${id}`)
      .then(this.onSuccess)
      .catch(this.onError);
  }
  sendFeedback = evt => {
    evt.preventDefault();
    const { id } = this.props;

    const { name, comments, advantages, disadvantages } = this.state;
    axios
      .post("/feedback", { name, comments, advantages, disadvantages, product_ID: id })
      .then(el => console.log(el))
      .catch(err => console.log(err));
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

  inputHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { feedbacks } = this.state;

    return (
      <Row className="feedback">
        <h2 className="feedback-head">
          Feedback <span>{feedbacks.length}</span>
        </h2>
        {feedbacks && <FeedbackItems feedbacks={feedbacks} />}

        <form className="feedback_form">
          <Col md={6} lg={5}>
            <p className="feedback_name">
              <i className="fas fa-user-astronaut" />
              Enter your name:
            </p>
            <input
              className="feedback_name-input"
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={this.inputHandle}
            />
          </Col>
          <Col lg={12}>
            <p>
              <i className="far fa-thumbs-up" />
              Advantages:
            </p>
            <textarea
              className="feedback_comments"
              rows="3"
              name="advantages"
              placeholder="Enter your feedback here"
              onChange={this.inputHandle}
            />
            <p>
              <i className="far fa-thumbs-down" />
              Disadvanteges:
            </p>
            <textarea
              className="feedback_comments"
              rows="3"
              name="disadvantages"
              placeholder="Enter your feedback here"
              onChange={this.inputHandle}
            />
            <p>
              <i className="far fa-comments" />
              Comments:
            </p>
            <textarea
              className="feedback_comments"
              rows="3"
              name="comments"
              placeholder="Enter your feedback here"
              onChange={this.inputHandle}
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

export default FeedbackForm;
