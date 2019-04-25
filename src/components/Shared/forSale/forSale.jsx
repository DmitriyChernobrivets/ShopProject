import React from "react";
import PropTypes from "prop-types";

const ForSale = prop => {
  return (
    <div className="forsale">
      {prop.forSale ? (
        <span className="forSale-text">
          <i className="fas fa-check" />
          Available
        </span>
      ) : (
        <span className="forSale-text">
          <i className="fas fa-times" />
          Sold
        </span>
      )}
    </div>
  );
};

ForSale.propTypes = {
  forSale: PropTypes.bool.isRequired
};

export default ForSale;
