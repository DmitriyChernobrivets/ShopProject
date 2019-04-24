import React from "react";
import { Link } from "react-router-dom";
// import "./styles.scss";

const Title = props => {
  const { title } = props.product;
  const { link } = props;
  return (
    <Link to={link} className="card-title">
      <span>{title}</span>
    </Link>
  );
};

export default Title;
