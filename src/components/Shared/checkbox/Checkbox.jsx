import React, { Component } from "react";
import "./checkbox.scss";
export default class Checkbox extends Component {
  render() {
    const { item, onChangeAction } = this.props;
    console.log(item);
    return (
      <div>
        <div className="hi">
          <label forhtml="check">
            <input type="checkbox" id="check" checked={item.checked} onChange={onChangeAction} />
            {item.name}
          </label>
        </div>
      </div>
    );
  }
}
