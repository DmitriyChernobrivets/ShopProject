import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <Link to="/login" className="user-office">
          SignIn
        </Link>
        <Link to="/" className="user-bucket">
          Backet
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
