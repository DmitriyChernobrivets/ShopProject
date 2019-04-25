import React from "react";
import { connect } from "react-redux";
import Main from "../components/Blocks/main/index";
import {
  getBucketItems,
  getCurrentFilters,
  getAllProducts,
  getTotalPageCount
} from "../Selectors/common";
import {
  getFilteredProducts,
  getProductBySearchInput,
  resetFilters,
  resetStore
} from "../store/Actions/getProducts";

const MainContainer = props => <Main {...props} />;

const mapStatetoProps = state => {
  return {
    totalPageCount: getTotalPageCount(state),
    allproducts: getAllProducts(state),
    currentFilters: getCurrentFilters(state),
    bucketItems: getBucketItems(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    getfilteredProducts: val => dispatch(getFilteredProducts(val)),
    getProductBySearchInput: val => dispatch(getProductBySearchInput(val)),
    resetFilters: () => dispatch(resetFilters()),
    resetStore: () => dispatch(resetStore())
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(MainContainer);
