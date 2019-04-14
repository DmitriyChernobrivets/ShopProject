import React, { Component, Fragment } from "react";
import Tabs from "../../Shared/Tabs/Tabs";
import Registration from "./Registration";
import Login from "./Login";
import { connect } from "react-redux";
import { changeSignTab } from "../../../store/Actions/getUser";
import PropTypes from "prop-types";
import "./styles.scss";
import "react-notifications/lib/notifications.css";

class SignIn extends Component {
  changeTab = val => () => {
    const { changeTab } = this.props;
    changeTab(val);
  };
  render() {
    const { currentTab, history } = this.props;

    return (
      <Fragment>
        <div className="signin-container">
          <Tabs currentTab={currentTab} click={this.changeTab} />

          {currentTab === "Login" ? <Login history={history} /> : <Registration />}
        </div>
      </Fragment>
    );
  }
}

SignIn.propTypes = {
  changeTab: PropTypes.func.isRequired
};

const getState = state => {
  return {
    user: state.auth.currentUser,
    signUp: state.auth.Signnup,
    currentTab: state.auth.currentTab
  };
};
const getDispatcher = dispatch => {
  return {
    changeTab: val => dispatch(changeSignTab(val))
  };
};
export default connect(
  getState,
  getDispatcher
)(SignIn);
