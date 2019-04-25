import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => {
  const { item, onChangeAction } = props;

  return (
    <label forhtml="check" className="checkbox_label">
      <input
        type="checkbox"
        className="checkbox"
        id="check"
        checked={item.checked}
        onChange={onChangeAction}
      />
      {item.name}
    </label>
  );
};

Checkbox.propTypes = {
  item: PropTypes.object.isRequired,
  onChangeAction: PropTypes.func.isRequired
};

export default Checkbox;
