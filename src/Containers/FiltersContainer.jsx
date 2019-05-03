import React from "react";
import { connect } from "react-redux";
import Filters from "../components/Blocks/Filter/Filter";
import { getSort, getFilters } from "../Selectors/common";
import { getProducts } from "../store/Actions/getProducts";

const FiltersContainer = props => <Filters {...props} />;

const mapStatetoProps = state => {
  return {
    filters: getFilters(state),
    sort: getSort(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    getProducts: val => dispatch(getProducts(val))
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(FiltersContainer);
