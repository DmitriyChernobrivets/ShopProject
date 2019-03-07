import React, { Component } from "react";
import "./checkbox.scss";
export default class Checkbox extends Component {
  render() {
    const { item, onChangeAction } = this.props;

    return (
      <label forhtml="check" className="checkbox_title">
        <input type="checkbox" id="check" checked={item.checked} onChange={onChangeAction} />
        {item.name}
      </label>
    );
  }
}
