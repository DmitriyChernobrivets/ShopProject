import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Checkbox = props => {
  const { item, onChangeAction } = props;

  return (
    <label forhtml="check" className="checkbox_title">
      <input type="checkbox" id="check" checked={item.checked} onChange={onChangeAction} />
      {item.name}
    </label>
  );
};

Checkbox.propTypes = {
  item: PropTypes.object.isRequired,
  onChangeAction: PropTypes.func.isRequired
};

export default Checkbox;
