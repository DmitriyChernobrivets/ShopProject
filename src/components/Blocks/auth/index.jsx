import React, { Component, Fragment } from "react";
import Tabs from "../../Shared/Tabs/Tabs";
import Registration from "./Registration";
import Login from "./Login";
import { connect } from "react-redux";
// import "./styles.scss";
import "react-notifications/lib/notifications.css";

class SignIn extends Component {
  state = {
    currentTabidx: 1
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user) {
      this.props.hideModal();
    }
  }
  changeTab = idx => () => {
    this.setState({ currentTabidx: idx });
  };
  render() {
    const { history } = this.props;
    const { currentTabidx } = this.state;
    return (
      <Fragment>
        <div className="signin-container">
          <Tabs currentTab={currentTabidx} click={this.changeTab} />

          {currentTabidx === 1 ? <Login history={history} /> : <Registration />}
        </div>
      </Fragment>
    );
  }
}

const getState = state => {
  return {
    user: state.auth.currentUser,
    signUp: state.auth.Signnup
  };
};

export default connect(getState)(SignIn);
