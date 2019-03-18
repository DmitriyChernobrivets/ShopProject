import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { options } from "../../Shared/Svg/options";
import SVG from "../../Shared/Svg/svg";

const { CABINET, BUCKET } = options;

const HeaderComponents = props => (
  <header className="header">
    <div className="left-panel">
      <div>Just Smile</div>
    </div>
    <div className="header-left">
      <ul className="menu">
        {props.categories.map((category, idx) => (
          <li className="menu-item" key={idx}>
            <Link to={"/category/" + category}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="header-right">
      <div className="header-auth">
        <Link to="/signin" className="user-office">
          <SVG path={CABINET} viewbox="0 0 36 32" height="23" width="23" />
        </Link>
        <Link to="/bucket" className="user-bucket">
          <SVG path={BUCKET} viewbox="0 0 32 32" height="23" width="23" />
        </Link>
      </div>
    </div>
  </header>
);

const getState = state => {
  return {
    categories: state.categories
  };
};

export default connect(getState)(HeaderComponents);
