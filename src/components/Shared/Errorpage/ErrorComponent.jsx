import React from "react";
import "./styles.scss";

const ErrorComponent = props => {
  return <h5 className="error_text">{props.title}</h5>;
};

export default ErrorComponent;
