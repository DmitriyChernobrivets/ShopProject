import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const RatingStars = props => {
  const { rating } = props;
  const baseStarsCount = [1, 2, 3, 4, 5];
  return (
    <div className="stars-container">
      {baseStarsCount.map((el, idx) =>
        idx + 1 >= rating ? (
          <i
            className="fa fa-star"
            key={el}
            style={{ color: "rgb(255, 226, 60)" }}
            aria-hidden="true"
          />
        ) : (
          <i className="fa fa-star" key={el} style={{ color: "red" }} aria-hidden="true" />
        )
      )}

      <span>{rating}</span>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingStars;
