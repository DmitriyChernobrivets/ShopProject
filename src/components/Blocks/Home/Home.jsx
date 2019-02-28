import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";

import SearchInput from "../../Shared/searchInput/searchInput";
import { options } from "../../Shared/Svg/options";
import HomeCard from "../../Shared/HomeCard/HomeCard";
import { connect } from "react-redux";
import "./home.scss";

class Home extends Component {
  // state = {
  //   category: ["notebook", "telephone", "PC"]
  // };
  render() {
    const { categories } = this.props;

    const { SEARCH } = options;
    return (
      <Container>
        <Row>
          <SearchInput path={SEARCH} />
          {categories.map((card, idx) => (
            <HomeCard key={idx} category={card} />
          ))}
        </Row>
      </Container>
    );
  }
}

const getState = state => {
  return {
    categories: state.categories
  };
};

export default connect(getState)(Home);
