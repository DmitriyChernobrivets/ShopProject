import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AccessNotification from "./Feedback_notification";
import BuyPartial from "./BuyPartial";
import ImagePartial from "./ImagePartial";
import Details from "../../Shared/Details/Details";
import FeedbackContainer from "../../../Containers/FeedbackContainer";
import PropTypes from "prop-types";

const CardInfo = props => {
  const { product } = props.product;
  const { addToBucket, status, history, bucketItems } = props;

  return (
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
        {status === "Guest" ? <AccessNotification /> : <FeedbackContainer id={product._id} />}
      </Container>
    </main>
  );
};

CardInfo.propTypes = {
  product: PropTypes.object.isRequired,
  addToBucket: PropTypes.func.isRequired,
  getProductById: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default CardInfo;
