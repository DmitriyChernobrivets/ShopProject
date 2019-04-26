import React from "react";
import { Col } from "react-bootstrap";

const Cardpreloader = () => {
  return (
    <Col xs={6} sm={6} lg={4}>
      <div className="card-preloader">
        <div className="card-loader card-loader--tabs" />
      </div>
    </Col>
  );
};

export default Cardpreloader;
