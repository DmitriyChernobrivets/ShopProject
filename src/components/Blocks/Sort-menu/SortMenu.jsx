import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { getFilteredProducts } from "../../../store/Actions/getProducts";
import "./Sort.scss";
const options = [
  { value: "cheap", label: "Start from cheap" },
  { value: "exp", label: "Start from expensive" }
];
class SortMenu extends Component {
  state = {
    selectedOption: null
  };

  onChange = selectedOption => {
    const { getFilteredProducts, currentFilters } = this.props;

    this.setState({ selectedOption }, () =>
      getFilteredProducts({ ...currentFilters, sort: selectedOption.value })
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="sort-menu">
        <h5>Sort by price: </h5>
        <Select
          className="price-select"
          onChange={this.onChange}
          placeholder="Select..."
          options={options}
          value={selectedOption}
        />
      </div>
    );
  }
}
const getState = state => {
  return {
    currentFilters: state.currentFilters
  };
};
const getdispatcher = dispatch => {
  return {
    getFilteredProducts: val => dispatch(getFilteredProducts(val))
  };
};

export default connect(
  getState,
  getdispatcher
)(SortMenu);
