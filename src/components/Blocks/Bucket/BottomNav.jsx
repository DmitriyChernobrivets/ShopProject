import React, { Fragment } from "react";
import "./styles.scss";

const BottomNav = props => {
  const { total, click } = props;
  return (
    <Fragment>
      <div className="total_price">
        Total price: <span>{total} UAH</span>
      </div>
      <button className="bucket_buy-btn">BUY</button>
      <button className="bucket_return-link" onClick={click}>
        Go back
      </button>
    </Fragment>
  );
};

export default BottomNav;
