import React from "react";
import "./feedback.scss";
import moment from "moment";
import { Col, Row } from "react-bootstrap";

const FeedbackItems = ({ feedbacks }) => {
  return feedbacks.map(({ _id, name, created, comments, advantages, disadvantages }) => (
    <div className="feedback_item" key={_id}>
      <h5 className="feedback_item-name">{name}</h5>
      <p className="feedback_item-date">{moment(created).format("MMM Do YY")}</p>
      <p className="feedback_item-comments">{comments}</p>

      <Row>
        <Col lg={2} md={2} xs={2}>
          <p className="feedback_item-minus">Minus: </p>
          <p className="feedback_item-plus">Plus: </p>
        </Col>
        <Col lg={10} md={10} xs={10}>
          <p className="feedback_item-advantage">{advantages}</p>
          <p className="feedback_item-disadvantage">{disadvantages}</p>
        </Col>
      </Row>
    </div>
  ));
};

export default FeedbackItems;
