import React, { Component } from "react";
import "./styles.scss";
import Checkbox from "../../Shared/checkbox/Checkbox";
import { connect } from "react-redux";
import { getFilteredProducts } from "../../../store/Actions/getProducts";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class Filter extends Component {
  state = {
    title: [{ checked: false, name: "ThinkPad" }, { checked: false, name: "Lenovo" }],
    memory: [
      { checked: false, name: "32" },
      { checked: false, name: "16" },
      { checked: false, name: "8" }
    ],
    price: { min: 0, max: 150000 }
  };

  onChangeAction(idx, key) {
    const { sort } = this.props;

    this.setState(
      prevState => {
        const newData = prevState[key].map((el, index) =>
          index === idx ? { ...el, checked: !el.checked } : el
        );
        return {
          [key]: [...newData]
        };
      },
      () => this.props.getFilteredProducts({ ...this.state, sort })
    );
  }
  onRangeChange = price =>
    this.setState({ ...this.state, price }, () => this.props.getFilteredProducts(this.state));
  render() {
    return (
      <div className="filter_container">
        {Object.keys(this.state).map((el, idx) => (
          <div className="filter_box" key={idx}>
            <h5>By {el === "memory" ? el + ", Gb" : el}</h5>
            {el === "price" ? (
              <InputRange
                maxValue={150000}
                minValue={0}
                value={this.state.price}
                onChange={this.onRangeChange}
              />
            ) : (
              this.state[el].map((item, idx) => (
                <Checkbox
                  item={item}
                  key={idx}
                  onChangeAction={this.onChangeAction.bind(this, idx, el)}
                />
              ))
            )}
          </div>
        ))}
      </div>
    );
  }
}

const getState = state => {
  return {
    sort: state.currentFilters.sort
  };
};
const getDisptatchToProps = dispatch => {
  return {
    getFilteredProducts: val => dispatch(getFilteredProducts(val))
  };
};
export default connect(
  getState,
  getDisptatchToProps
)(Filter);
