import React, { Component, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./cardinfo.scss";
import { fetchProductById } from "../../../store/Actions/getProductById";
import { connect } from "react-redux";
import ForSale from "../../Shared/forSale/forSale";
import RatingStars from "../../Shared/Stars/RatingStars";
import Details from "../../Shared/Details/Details";
import FeeadbackForm from "../Feedback/FeedbackFrom";

class CardInfo extends Component {
  componentDidMount() {
    const { url } = this.props.match;

    this.props.getProductById(url);
  }

  render() {
    const { product } = this.props.product;

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
                  <div className="card-info_stars">
                    <RatingStars rating={product.rating} />
                  </div>
                  {product.hot && (
                    <div className="hot-price">
                      <span>HOT</span>
                    </div>
                  )}
                  <div className="card-info_image">
                    <img src={product.images[0]} alt="img" />
                  </div>
                </Col>
                <Col col={12} lg={6} className="card-info_content">
                  <h3 className="card-info_about">Detail</h3>
                  <Fragment>
                    <Details description={product.description} />
                  </Fragment>
                </Col>
              </Row>
            </Col>
            <Col className="card-info" xs={12} sm={6} md={6} lg={4}>
              <div>
                <h3 className="card-info_garantee">Garantee 12 months</h3>
              </div>
              <div className="card-info_buy">
                <p className="card-info_buy-label">Price:</p>
                <div className="card-info_buy-price">
                  <p className="card-info_buy-current">{product.price} UAH</p>
                  <div className="card-info_buy-forSale">
                    <ForSale forSale={product.forSale} />
                  </div>
                </div>
                <button className="card-info_buy-btn">
                  <i className="fas fa-shopping-bag" />
                  <span>Bucket</span>
                </button>
              </div>
            </Col>
          </Row>
          <Fragment>
            <FeeadbackForm id={product._id} />
          </Fragment>
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
    getProductById: id => dispatch(fetchProductById(id))
  };
};

export default connect(
  StateToProps,
  dispatchToProps
)(CardInfo);
