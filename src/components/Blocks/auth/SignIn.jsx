import React, { Component } from "react";
// import { Col, Row, Container } from "react-bootstrap";
import Registration from "./Registration";
import Login from "./Login";
import { connect } from "react-redux";
import { changeSignTab } from "../../../store/Actions/getUser";
import "./signin.scss";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

function Notificationhandler(notification) {
  switch (notification.status) {
    case "Exists":
      NotificationManager.error("User already exists");
      break;
    case "Success":
      NotificationManager.success("User Created");
      break;
    case "LOGIN":
      NotificationManager.success("WELCOME");
      break;
    case "Failed":
      NotificationManager.error("Wrong User");
      break;
    default:
      return;
  }
}
class SignIn extends Component {
  // state = {
  //   currentTab: ""
  // };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentTab !== this.state.currentTab;
  }
  componentWillReceiveProps(nextProps) {
    Notificationhandler(nextProps.signUp);
  }
  change = () => {
    const { changeTab } = this.props;
    changeTab();
  };
  render() {
    const { closeModal, currentTab } = this.props;
    // const { currentTab } = this.state;

    // className={currentTab === "Login" ? "active" : null}
    return (
      <div className="signin-modal" onClick={closeModal}>
        <div className="signin-container">
          <div className="signin_tabs">
            <span onClick={this.change}>Login</span>
            <span onClick={this.change}>
              {/* className={currentTab === "Registration" ? "active" : null} */}
              Reg
            </span>
          </div>
          {currentTab ? <Login /> : <Registration />}
        </div>

        <NotificationContainer />
      </div>
    );
  }
}
const getState = state => {
  console.log(state);
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
