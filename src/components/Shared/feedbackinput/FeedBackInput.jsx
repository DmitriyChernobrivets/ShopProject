import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FeedbackInput = props => {
  const { title, icon, inputValue, onchange, name, placeholder, isInputsValid, textarea } = props;
  return (
    <Fragment>
      <label className={isInputsValid && "error-label"}>
        <i className={icon} />
        {title}:
      </label>
      {!textarea ? (
        <input
          className={isInputsValid ? "feedback_name-input error" : "feedback_name-input"}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={onchange}
          value={inputValue}
        />
      ) : (
        <textarea
          className={isInputsValid ? "feedback_comments error" : "feedback_comments"}
          rows="3"
          name={name}
          placeholder={placeholder}
          onChange={onchange}
          value={inputValue}
        />
      )}
    </Fragment>
  );
};

FeedbackInput.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default FeedbackInput;
