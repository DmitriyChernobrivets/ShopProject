import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const HomeCard = props => {
  const { category } = props;
  return (
    <Col xs={6} md={4} className="home-category">
      <Link to={"/category/" + category}>
        <img src={"./images/Home/" + category + ".jpg"} alt="Homepage_img" />
        <h3>{category}</h3>
      </Link>
    </Col>
  );
};

HomeCard.propTypes = {
  category: PropTypes.string.isRequired
};

export default HomeCard;
