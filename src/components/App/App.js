import React, { Component } from "react";

import HeaderComponents from "../Blocks/Header/Header";
import Main from "../Blocks/main/main";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CardInfo from "../Blocks/CardInfo/CardInfo";
import Home from "../Blocks/Home/Home";
import Bucket from "../Blocks/Bucket/Bucket";
import SignIn from "../Blocks/auth/SignIn";
import { connect } from "react-redux";
import { defaultAuthorization } from "../../store/Actions/getUser";
// import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.getDefaultRights();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderComponents />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/category/:categories" component={Main} />
            <Route exact path="/category/:categories/:id" component={CardInfo} />
            <Route exact path="/bucket" component={Bucket} />
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
