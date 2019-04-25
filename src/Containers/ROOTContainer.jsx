import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import {
  getIdProductPreload,
  getAllProductPreload,
  getGlobalError,
  getAuthStatus
} from "../Selectors/common";
import { defaultAuthorization, resetError } from "../store/Actions/getUser";

class ROOTContainer extends Component {
  componentDidMount() {
    const { defaultAuthorization } = this.props;
    defaultAuthorization();
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
    defaultAuthorization: () => dispatch(defaultAuthorization()),
    resetError: () => dispatch(resetError())
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(ROOTContainer);
