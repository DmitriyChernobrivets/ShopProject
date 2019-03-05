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
  // const addToBucket = () => {
  //   const bucketItem = JSON.parse(localStorage.getItem("bucket")) || [];
  //   const isDuplicate = bucketItem.find(el => el._id === product._id);
  //   if (isDuplicate) return;
  //   bucketItem.push(product);
  const handleAdd = () => {
    addToBucket(product);
  };
  //   localStorage.setItem("bucket", JSON.stringify(bucketItem));
  // };
  const { _id, description, title, forSale, images, price, hot, rating } = product;
  const { categories } = match.params;
  return (
    <Col className="product-card" xs={12} sm={6} lg={4}>
      {hot && (
        <div className="hot-price">
          <span>HOT</span>
        </div>
      )}
      <div className="prdouct-image">
        <Link to={categories + "/" + _id}>
          <img src={images[0]} alt="img" />
        </Link>
      </div>
      <Link to="/" className="product-card-title">
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
