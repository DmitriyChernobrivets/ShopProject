import React, { Fragment } from "react";
import RatingStars from "../../Shared/Stars/RatingStars";
import PropTypes from "prop-types";
import "./styles.scss";

const ImagePartial = props => {
  const { rating, hot, images } = props.product;
  return (
    <Fragment>
      <RatingStars rating={rating} />

      {hot && (
        <div className="hot-price">
          <span>HOT</span>
        </div>
      )}
      <div className="card-info_image">
        <img src={images[0]} alt="img" />
      </div>
    </Fragment>
  );
};

ImagePartial.propTypes = {
  product: PropTypes.object.isRequired
};

export default ImagePartial;
