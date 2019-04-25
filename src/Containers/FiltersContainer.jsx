import React from "react";
import { connect } from "react-redux";
import Filters from "../components/Blocks/Filter/Filter";
import { getSort } from "../Selectors/common";
import { getFilteredProducts } from "../store/Actions/getProducts";

const FiltersContainer = props => <Filters {...props} />;

const mapStatetoProps = state => {
  return {
    sort: getSort(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    getFilteredProducts: val => dispatch(getFilteredProducts(val))
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(FiltersContainer);
