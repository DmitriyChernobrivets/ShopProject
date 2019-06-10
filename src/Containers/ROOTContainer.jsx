import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import {
  getIdProductPreload,
  getAllProductPreload,
  getGlobalError,
  getAuthStatus
} from "../Selectors/common";
import { initUser, resetError } from "../store/Actions/User";

class ROOTContainer extends Component {
  componentDidMount() {
    const { initUser } = this.props;
    initUser();
  }
  render() {
    const { auth } = this.props;
    return auth !== "unauthorized" ? <App {...this.props} /> : null;
  }
}

const mapStatetoProps = state => {
  return {
    preloaderAll: getAllProductPreload(state),
    preloaderID: getIdProductPreload(state),
    auth: getAuthStatus(state),
    errHandler: getGlobalError(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    initUser: () => dispatch(initUser()),
    resetError: () => dispatch(resetError())
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(ROOTContainer);
