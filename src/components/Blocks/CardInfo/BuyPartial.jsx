import React from "react";
import ForSale from "../../Shared/forSale/forSale";
import PropTypes from "prop-types";
import Button from "../../Shared/Button/Button";

const BuyPartial = props => {
  const { price, forSale } = props.product;
  const { click, product, history, bucketItems } = props;
  return (
    <div className="card-info_buy">
      <p className="card-info_buy-label">Price:</p>
      <div className="card-info_buy-price">
        <p className="card-info_buy-current">{price} UAH</p>

        <ForSale forSale={forSale} />
      </div>
      <Button product={product} bucketItems={bucketItems} addToBucket={click} history={history} />
    </div>
  );
};

BuyPartial.propTypes = {
  forSale: PropTypes.bool,
  price: PropTypes.number,
  click: PropTypes.func.isRequired
};

export default BuyPartial;
