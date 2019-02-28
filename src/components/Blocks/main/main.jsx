import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../store/Actions/getProducts";
import Card from "../Card/Card";
import "./main.scss";
import { Col, Row, Container } from "react-bootstrap";

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
            {products.map(prod => (
              <Col xs={12} sm={6} lg={4} key={prod._id}>
                <Card product={prod} match={match} />
              </Col>
            ))}
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
