import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

class HomeCard extends Component {
  render() {
    const { category } = this.props;
    return (
      <Col sm={6} lg={4} className="home-category">
        <Link to={"/category/" + category}>
          <img src={"./images/Home/" + category + ".jpg"} alt="Homepage_img" />
          <h3>{category}</h3>
        </Link>
      </Col>
    );
  }
}

HomeCard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default HomeCard;
