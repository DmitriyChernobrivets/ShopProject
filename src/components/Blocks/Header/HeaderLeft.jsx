import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const HeaderLeft = props => {
  const { categories } = props;

  return (
    <div className="header-left">
      <ul className="menu">
        <li className="menu-item">
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        {categories.map(category => (
          <li className="menu-item" key={category}>
            <NavLink activeClassName="active-link" to={"/category/" + category}>
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLeft;
