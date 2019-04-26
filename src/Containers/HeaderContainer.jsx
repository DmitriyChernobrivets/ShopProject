import React from "react";
import { connect } from "react-redux";
import Header from "../components/Blocks/Header/index";
import { withRouter } from "react-router-dom";
import { getUser, getBucketItems } from "../Selectors/common";
import { logout } from "../store/Actions/User";

const HeaderContainer = props => <Header {...props} />;

const mapStatetoProps = state => {
  return {
    user: getUser(state),
    bucketitems: getBucketItems(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStatetoProps,
    getDispatchToProps
  )(HeaderContainer)
);
