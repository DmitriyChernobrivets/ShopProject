import React, { Component } from "react";
import ReactDom from "react-dom";
import Registration from "./Registration";
import Login from "./Login";

import { connect } from "react-redux";
import { changeSignTab } from "../../../store/Actions/getUser";
import "./signin.scss";
import { NotificationContainer } from "react-notifications";
import { Notificationhandler } from "../../../helpers/functions";
import "react-notifications/lib/notifications.css";

class SignIn extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.currentTab === nextProps.currentTab) {
      Notificationhandler(nextProps.signUp);
    }

    if (nextProps.user.status === "User") {
      this.el.click();
    }
  }
  changeTab = val => () => {
    const { changeTab } = this.props;
    changeTab(val);
  };
  render() {
    const { closeModal, currentTab } = this.props;

    return (
      <div
        className="signin-modal"
        onClick={closeModal}
        ref={val => {
          this.el = val;
        }}
      >
        <div className="signin-container">
          <div className="signin_tabs">
            <span onClick={this.changeTab("Login")}>Login</span>
            <span onClick={this.changeTab("Registration")}>Reg</span>
          </div>
          {currentTab === "Login" ? <Login /> : <Registration />}
        </div>

        <NotificationContainer />
      </div>
    );
  }
}
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
