import React from "react";
import { Row, Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import PropTypes from "prop-types";
import "./styles.scss";

const Home = props => {
  const { categories } = props;
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
};

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Home;
