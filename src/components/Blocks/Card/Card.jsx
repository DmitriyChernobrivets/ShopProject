import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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

      <RatingStars rating={rating} />
      <ForSale forSale={forSale} />

      <Button className="btn product-card-button" onClick={handleAdd}>
        <span>{price} UAH</span>
      </Button>

      <Details description={description} />
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
