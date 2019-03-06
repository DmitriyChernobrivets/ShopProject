import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../store/Actions/getProducts";
import Card from "../Card/Card";
import "./main.scss";
import { Col, Row, Container } from "react-bootstrap";
import Filter from "../Filter/Filter";

class Main extends Component {
  componentDidMount() {
    const { categories } = this.props.match.params;
    this.props.getAllProducts(categories);
  }
  render() {
    const { products, match } = this.props;

    return (
      <main>
        <Container className="wrapper">
          <Row>
            <Col lg={3}>
              <Filter />
            </Col>
            <Col lg={9}>
              <Row>
                {products.map(prod => (
                  <Card product={prod} match={match} key={prod._id} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.allProducts.products
  };
};

const mapDeispathToProps = dispatch => {
  return {
    getAllProducts: category => dispatch(getProducts(category))
  };
};

export default connect(
  mapStateToProps,
  mapDeispathToProps
)(Main);
