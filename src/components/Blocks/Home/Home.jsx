import React from "react";
import { Row, Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import categories from "../../../constants/categories";

const Home = () => (
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
export default Home;
