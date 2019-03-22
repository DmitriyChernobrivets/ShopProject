import React, { Fragment } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import ForSale from "../../Shared/forSale/forSale";
import RatingStars from "../../Shared/Stars/RatingStars";
import Details from "../../Shared/Details/Details";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBucket } from "../../../store/Actions/bucket";

const Card = ({ product, match, addToBucket }) => {
  const handleAdd = () => {
    addToBucket(product);
  };

  const { _id, description, title, forSale, images, price, hot, rating } = product;
  const { categories } = match.params;
  const link = categories + "/" + _id;
  return (
    <Col className="product-card" xs={12} sm={6} lg={4}>
      {hot && (
        <div className="hot-price">
          <span>HOT</span>
        </div>
      )}
      <div className="prdouct-image">
        <Link to={link}>
          <img src={images[0]} alt="img" />
        </Link>
      </div>
      <Link to={link} className="product-card-title">
        <span>{title}</span>
      </Link>
      <div className="product-card_review">
        <RatingStars rating={rating} />

        <Link to={categories + "/" + _id} className="review">
          <span>Add review</span>
        </Link>
      </div>

      <Fragment>
        <ForSale forSale={forSale} />
      </Fragment>
      <Button className="btn product-card-button" onClick={handleAdd}>
        <span>{price} UAH</span>
      </Button>
      <Fragment>
        <Details description={description} />
      </Fragment>
    </Col>
  );
};

const dispatchToPRops = dispatch => {
  return {
    addToBucket: value => dispatch(addToBucket(value))
  };
};
export default connect(
  null,
  dispatchToPRops
)(Card);
