import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { fetchProductById } from "../../../store/Actions/getProductById";
import { connect } from "react-redux";
import { addToBucket } from "../../../store/Actions/bucket";
import AccessNotification from "./Feedback_notification";
import BuyPartial from "./BuyPartial";
import ImagePartial from "./ImagePartial";
import Details from "../../Shared/Details/Details";
import FeeadbackForm from "../Feedback/FeedbackFrom";
import PropTypes from "prop-types";
// import "./styles.scss";

class CardInfo extends Component {
  state = {
    isAddedtoBucket: false
  };
  componentDidMount() {
    const { url } = this.props.match;
    const { getProductById } = this.props;
    getProductById(url);
  }

  render() {
    const { product } = this.props.product;
    const { addToBucket, status, history, bucketItems } = this.props;
    return (
      product && (
        <main>
          <Container>
            <Row className="card-info_container">
              <div className="card-info_title">
                <h1>{product.title}</h1>
              </div>
              <Col xs={12} sm={12} md={6} lg={8}>
                <Row>
                  <Col xs={6} sm={6} md={12} lg={6}>
                    <ImagePartial product={product} />
                  </Col>
                  <Col xs={6} sm={6} md={12} lg={6} className="card-info_content">
                    <h3 className="card-info_about">Detail</h3>

                    <Details disabled description={product.description} />
                  </Col>
                </Row>
              </Col>
              <Col className="card-info_buy " xs={12} sm={12} md={6} lg={4}>
                <div>
                  <h3 className="card-info_garantee">Garantee 12 months</h3>
                </div>
                <BuyPartial
                  product={product}
                  click={addToBucket}
                  history={history}
                  bucketItems={bucketItems}
                />
              </Col>
            </Row>
            {status === "Guest" ? <AccessNotification /> : <FeeadbackForm id={product._id} />}
          </Container>
        </main>
      )
    );
  }
}

CardInfo.propTypes = {
  product: PropTypes.object.isRequired,
  addToBucket: PropTypes.func.isRequired,
  getProductById: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

const StateToProps = state => {
  return {
    product: state.currentProductInfo,
    status: state.auth.currentUser.status,
    bucketItems: state.bucket.items
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
