import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HeaderLeft = props => {
  const { categories } = props;
  return (
    <div className="header-left">
      <ul className="menu">
        {categories.map(category => (
          <li className="menu-item" key={category}>
            <Link to={"/category/" + category}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLeft;
