import React from "react";
import ForSale from "../../Shared/forSale/forSale";
import "./styles.scss";

const BuyPartial = props => {
  const { price, forSale } = props.product;
  const { click } = props;
  return (
    <div className="card-info_buy">
      <p className="card-info_buy-label">Price:</p>
      <div className="card-info_buy-price">
        <p className="card-info_buy-current">{price} UAH</p>

        <ForSale forSale={forSale} />
      </div>
      <button className="card-info_buy-btn" onClick={click.bind(this, props.product)}>
        <i className="fas fa-shopping-bag" />
        <span>Add to Bucket</span>
      </button>
    </div>
  );
};

export default BuyPartial;
