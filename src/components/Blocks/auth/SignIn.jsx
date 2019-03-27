import React, { Component } from "react";
import Modal from "../../Shared/Modal/Modal";
import Tabs from "../../Shared/Tabs/Tabs";
import Registration from "./Registration";
import Login from "./Login";

import { connect } from "react-redux";
import { changeSignTab } from "../../../store/Actions/getUser";
import "./styles.scss";
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
      <Modal click={closeModal}>
        <div className="signin-container">
          <Tabs currentTab={currentTab} click={this.changeTab} />
          {currentTab === "Login" ? <Login /> : <Registration />}
        </div>
        <NotificationContainer />
      </Modal>
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
