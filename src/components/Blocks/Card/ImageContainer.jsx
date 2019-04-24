import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../Shared/Stars/RatingStars";
// import "./styles.scss";

const ImageContainer = props => {
  const { hot, images, rating } = props.product;
  const { link } = props;
  return (
    <Fragment>
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
      <RatingStars rating={rating} />
    </Fragment>
  );
};

export default ImageContainer;
