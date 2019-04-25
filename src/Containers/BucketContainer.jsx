import React from "react";
import { connect } from "react-redux";
import Bucket from "../components/Blocks/Bucket/index";
import { getBucketItems, getTotalPrice } from "../Selectors/common";
import { updateBucket, increment, decrement, deleteItem } from "../store/Actions/bucket";

const BucketContainer = props => <Bucket {...props} />;

const mapStatetoProps = state => {
  return {
    total: getTotalPrice(state),
    items: getBucketItems(state)
  };
};

const getDispatchToProps = dispatch => {
  return {
    updateBucket: () => dispatch(updateBucket()),
    increment: value => dispatch(increment(value)),
    decrement: value => dispatch(decrement(value)),
    deleteItem: value => dispatch(deleteItem(value))
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(BucketContainer);
