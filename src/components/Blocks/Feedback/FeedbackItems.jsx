import React from "react";
import "./feedback.scss";
import moment from "moment";
import { Container, Col, Row } from "react-bootstrap";

const FeedbackItems = ({ feedbacks }) => {
  return feedbacks.map(post => (
    <div className="feedback_item">
      <h5 className="feedback_item-name">{post.name}</h5>
      <p className="feedback_item-date">{moment(post.created).format("MMM Do YY")}</p>
      <p className="feedback_item-comments">{post.comments}</p>

      <Row>
        <Col lg={2} md={2} xs={2}>
          <p className="feedback_item-minus">Minus: </p>
          <p className="feedback_item-plus">Plus: </p>
        </Col>
        <Col lg={10} md={10} xs={10}>
          <p className="feedback_item-advantage">{post.advantages}</p>
          <p className="feedback_item-disadvantage">{post.disadvantages}</p>
        </Col>
      </Row>
    </div>
  ));
};

export default FeedbackItems;
