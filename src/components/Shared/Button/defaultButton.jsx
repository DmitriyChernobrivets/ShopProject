import React from "react";
import PropTypes from "prop-types";

const DefaultButton = props => {
  const { classNames, title, callback } = props;
  const className = classNames ? `default-btn ${classNames}` : "default-btn";
  return (
    <button className={className} onClick={callback}>
      <span>{title}</span>
    </button>
  );
};

DefaultButton.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
export default DefaultButton;
