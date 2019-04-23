import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import PropTypes from "prop-types";
import "./styles.scss";

class Home extends Component {
  render() {
    const { categories } = this.props;
    return (
      <main>
        <Container>
          <Row>
            {categories.map((card, idx) => (
              <HomeCard key={idx} category={card} />
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Home;
