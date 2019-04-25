import React from "react";
import { Col, Row } from "react-bootstrap";

const AccessNotification = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="access-notification">
          <i className="fas fa-exclamation-triangle" />
          <h6>Feedback - only for registered users!!</h6>
        </div>
      </Col>
    </Row>
  );
};

export default AccessNotification;
