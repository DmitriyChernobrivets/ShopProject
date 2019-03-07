import React, { Component } from "react";
import "./filter.scss";
import Checkbox from "../../Shared/checkbox/Checkbox";
import { connect } from "react-redux";
import { getFilteredProducts } from "../../../store/Actions/getProducts";
import RangeInput from "../../Shared/Range/RangeInput";

class Filter extends Component {
  state = {
    title: [{ checked: false, name: "ThinkPad" }, { checked: false, name: "Lenovo" }],
    memory: [
      { checked: false, name: "32" },
      { checked: false, name: "16" },
      { checked: false, name: "8" }
    ]
  };

  onChangeAction(idx, key) {
    this.setState(
      prevState => {
        const newData = prevState[key].map((el, index) =>
          index === idx ? { ...el, checked: !el.checked } : el
        );
        return {
          [key]: [...newData]
        };
      },
      () => this.props.getFilteredProducts(this.state)
    );
  }

  render() {
    return (
      <div>
        {Object.keys(this.state).map(el => (
          <div className="filter_box">
            <h5>By {el === "memory" ? el + ", Gb" : el}</h5>
            {this.state[el].map((item, idx) => (
              <Checkbox
                item={item}
                key={idx}
                onChangeAction={this.onChangeAction.bind(this, idx, el)}
              />
            ))}
          </div>
        ))}
        <RangeInput />
      </div>
    );
  }
}

const getDisptatchToProps = dispatch => {
  return {
    getFilteredProducts: val => dispatch(getFilteredProducts(val))
  };
};
export default connect(
  null,
  getDisptatchToProps
)(Filter);
