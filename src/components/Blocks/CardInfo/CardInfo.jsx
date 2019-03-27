import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./styles.scss";
import { fetchProductById } from "../../../store/Actions/getProductById";
import { connect } from "react-redux";
import { addToBucket } from "../../../store/Actions/bucket";
import BuyPartial from "./BuyPartial";
import ImagePartial from "./ImagePartial";
import Details from "../../Shared/Details/Details";
import FeeadbackForm from "../Feedback/FeedbackFrom";

class CardInfo extends Component {
  componentDidMount() {
    const { url } = this.props.match;

    this.props.getProductById(url);
  }

  render() {
    const { product } = this.props.product;
    const { addToBucket } = this.props;
    return (
      product && (
        <Container>
          <Row className="card-info_row">
            <div className="card-info_title">
              <h1>{product.title}</h1>
            </div>
            <Col xs={12} sm={6} md={6} lg={8}>
              <Row>
                <Col xs={12} lg={6}>
                  <ImagePartial product={product} />
                </Col>
                <Col lg={6} className="card-info_content">
                  <h3 className="card-info_about">Detail</h3>

                  <Details disabled description={product.description} />
                </Col>
              </Row>
            </Col>
            <Col className="card-info" xs={12} sm={6} md={6} lg={4}>
              <div>
                <h3 className="card-info_garantee">Garantee 12 months</h3>
              </div>
              <BuyPartial product={product} click={addToBucket} />
            </Col>
          </Row>

          <FeeadbackForm id={product._id} />
        </Container>
      )
    );
  }
}
const StateToProps = state => {
  return {
    product: state.currentProductInfo
  };
};

const dispatchToProps = dispatch => {
  return {
    getProductById: id => dispatch(fetchProductById(id)),
    addToBucket: value => dispatch(addToBucket(value))
  };
};

export default connect(
  StateToProps,
  dispatchToProps
)(CardInfo);
