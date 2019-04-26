import React, { Component } from "react";
import { connect } from "react-redux";
import CardInfo from "../components/Blocks/CardInfo/index";
import { getAuthStatus, getProductById, getBucketItems } from "../Selectors/common";
import { addToBucket } from "../store/Actions/bucket";
import { fetchProductById } from "../store/Actions/getProductById";
import ErrorComponent from "../components/Shared/Errorpage/ErrorComponent";
class SignInContainer extends Component {
  componentDidMount() {
    const { url } = this.props.match;
    const { getProductById } = this.props;
    getProductById(url);
  }
  render() {
    const { product, error } = this.props.product;

    return error ? <ErrorComponent title={error} /> : product ? <CardInfo {...this.props} /> : null; //
  }
}

const mapStatetoProps = state => {
  return {
    product: getProductById(state),
    status: getAuthStatus(state),
    bucketItems: getBucketItems(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    getProductById: id => dispatch(fetchProductById(id)),
    addToBucket: value => dispatch(addToBucket(value))
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(SignInContainer);
