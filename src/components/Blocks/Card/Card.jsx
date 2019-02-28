import React, { Fragment } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ForSale from "../../Shared/forSale/forSale";
import RatingStars from "../../Shared/Stars/RatingStars";
import Details from "../../Shared/Details/Details";

const Card = ({ product, match }) => {
  const { _id, description, title, forSale, images, price, hot, rating } = product;
  const { categories } = match.params;
  console.log(match.params);
  return (
    <div className="product-card">
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
      <Button className="btn product-card-button">
        <span>{price} UAH</span>
      </Button>
      <div className="product-description">
        <Details description={description} />>
      </div>
    </div>
  );
};

export default Card;
