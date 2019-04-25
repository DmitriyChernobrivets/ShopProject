import React, { Component, Fragment } from "react";
import Tabs from "../../Shared/Tabs/Tabs";
import Registration from "./Registration";
import Login from "./Login";
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
    const { history, login, SocialsLoginSuccess, createUser } = this.props;
    const { currentTabidx } = this.state;
    return (
      <Fragment>
        <div className="signin-container">
          <Tabs currentTab={currentTabidx} click={this.changeTab} />

          {currentTabidx === 1 ? (
            <Login history={history} login={login} SocialsLoginSuccess={SocialsLoginSuccess} />
          ) : (
            <Registration createUser={createUser} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default SignIn;
