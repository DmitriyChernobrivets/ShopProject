import React, { Component } from "react";
import Modal from "../../Shared/Modal/Modal";
import Tabs from "../../Shared/Tabs/Tabs";
import Registration from "./Registration";
import Login from "./Login";

import { connect } from "react-redux";
import { changeSignTab } from "../../../store/Actions/getUser";
import "./styles.scss";

import "react-notifications/lib/notifications.css";

class SignIn extends Component {
  // componentWillReceiveProps(nextProps) {
  //   const { closeModal } = this.props;
  //   if (nextProps.user.status === "User") {
  //     this.el.closeModal();
  //   }
  // }

  changeTab = val => () => {
    const { changeTab } = this.props;
    changeTab(val);
  };
  render() {
    const { closeModal, currentTab, user } = this.props;

    return (
      <Modal closeModal={closeModal} status={user}>
        <div className="signin-container">
          <Tabs currentTab={currentTab} click={this.changeTab} />
          {currentTab === "Login" ? <Login /> : <Registration />}
        </div>
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
