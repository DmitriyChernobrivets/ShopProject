import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./styles.scss";

class Home extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Container>
        <Row>
          {categories.map((card, idx) => (
            <HomeCard key={idx} category={card} />
          ))}
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

const getState = state => {
  return {
    categories: state.categories
  };
};

export default connect(getState)(Home);
