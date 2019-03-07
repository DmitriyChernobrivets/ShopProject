import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import React, { Component } from "react";

class RangeInput extends Component {
  state = {
    value: { min: 2, max: 10 }
  };
  render() {
    return (
      <div>
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    );
  }
}

export default RangeInput;
