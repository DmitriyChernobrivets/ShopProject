import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLeft = props => {
  const { categories } = props;
  const { hide } = props;
  return (
    <div className={!hide ? "header-left" : "burder-list"}>
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
