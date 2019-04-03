import React from "react";
import { Col, Row } from "react-bootstrap";

import "./styles.scss";

const AccessNotification = () => {
  return (
    <Row>
      <Col lg={12}>
        <div className="access-notification">
          <i className="fas fa-exclamation-triangle" />
          <h4>Feedback - only for registered users!!</h4>
        </div>
      </Col>
    </Row>
  );
};

export default AccessNotification;
