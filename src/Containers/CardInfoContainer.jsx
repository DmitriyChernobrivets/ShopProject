import React from "react";
import { connect } from "react-redux";
import CardInfo from "../components/Blocks/CardInfo/index";
import { getAuthStatus, getProductById, getBucketItems } from "../Selectors/common";
import { addToBucket } from "../store/Actions/bucket";
import { fetchProductById } from "../store/Actions/getProductById";

const SignInContainer = props => <CardInfo {...props} />;

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
