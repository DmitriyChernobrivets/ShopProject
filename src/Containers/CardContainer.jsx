import React from "react";
import { connect } from "react-redux";
import Card from "../components/Blocks/Card/index";
import { addToBucket } from "../store/Actions/bucket";

const CardContainer = props => <Card {...props} />;

const getDispatchToProps = dispatch => {
  return {
    addToBucket: value => dispatch(addToBucket(value))
  };
};

export default connect(
  null,
  getDispatchToProps
)(CardContainer);
