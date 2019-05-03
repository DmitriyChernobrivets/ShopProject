import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../components/Blocks/main/index";
import {
  getBucketItems,
  getCurrentFilters,
  getAllProducts,
  getTotalPageCount
} from "../Selectors/common";
import {
  getProducts,
  getProductBySearchInput,
  resetFilters,
  resetStore
} from "../store/Actions/getProducts";

class MainContainer extends Component {
  componentDidMount() {
    const { currentFilters, getProducts, resetStore } = this.props;

    resetStore();
    getProducts(currentFilters);
  }

  componentWillUpdate(nextProps, nextState) {
    const { getProducts } = this.props;

    if (nextProps.match.params.categories !== this.props.match.params.categories) {
      getProducts();
      return true;
    } else {
      return false;
    }
  }
  componentWillUnmount() {
    const { resetFilters } = this.props;
    resetFilters();
  }
  onPageChange = ({ selected }) => {
    const { currentFilters, getProducts } = this.props;
    const fitlers = { ...currentFilters, currentPage: selected };

    getProducts(fitlers);
  };

  render() {
    return <Main {...this.props} onPageChange={this.onPageChange} />;
  }
}

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
    getProducts: val => dispatch(getProducts(val)),
    getProductBySearchInput: val => dispatch(getProductBySearchInput(val)),
    resetFilters: () => dispatch(resetFilters()),
    resetStore: () => dispatch(resetStore())
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(MainContainer);
