import React, { Fragment } from "react";
import DefaultButton from "../../Shared/Button/defaultButton";
// import "./styles.scss";

const BottomNav = props => {
  const { total, click } = props;
  return (
    <Fragment>
      <div className="total_price">
        Total price: <span>{total} UAH</span>
      </div>
      <DefaultButton title="Return" callback={click} />
    </Fragment>
  );
};

export default BottomNav;
