import React from "react";
import "./forSale.scss";

const ForSale = prop => {
  console.log(prop.forSale);
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

export default ForSale;
