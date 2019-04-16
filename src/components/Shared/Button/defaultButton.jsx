import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const DefaultButton = props => {
  return (
    <button className="default-btn" onClick={props.callback}>
      <span>{props.title}</span>
    </button>
  );
};

DefaultButton.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
export default DefaultButton;
