import React, { Component } from "react";
import Header from "../Blocks/Header/index";
import Main from "../Blocks/main/index";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CardInfo from "../Blocks/CardInfo/index";
import Home from "../Blocks/Home/Home";
import Bucket from "../Blocks/Bucket/index";
import NotFounded from "../Shared/Errorpage/NotFounded";
import { connect } from "react-redux";
import { defaultAuthorization } from "../../store/Actions/getUser";
import { NotificationContainer } from "react-notifications";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

class App extends Component {
  componentDidMount() {
    this.props.getDefaultRights();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header /> */}
          <Route component={Header} />
          <NotificationContainer />
          <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categories" component={Main} />
            <Route exact path="/category/:categories/:id" component={CardInfo} />
            <Route path="/bucket" component={Bucket} />
            <Route path="*" component={NotFounded} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const getDispatcher = dispatch => {
  return {
    getDefaultRights: () => dispatch(defaultAuthorization())
  };
};

export default connect(
  null,
  getDispatcher
)(App);
