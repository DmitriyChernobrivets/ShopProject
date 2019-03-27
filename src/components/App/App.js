import React, { Component } from "react";

import HeaderComponents from "../Blocks/Header/Header";
import Main from "../Blocks/main/main";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CardInfo from "../Blocks/CardInfo/CardInfo";
import Home from "../Blocks/Home/Home";
import Bucket from "../Blocks/Bucket/Bucket";
import Errorpage from "../Blocks/Errorpage/Errorpage";
import { connect } from "react-redux";
import { defaultAuthorization } from "../../store/Actions/getUser";

import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

class App extends Component {
  componentDidMount() {
    this.props.getDefaultRights();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderComponents />
          <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categories" component={Main} />
            <Route exact path="/category/:categories/:id" component={CardInfo} />
            <Route path="/bucket" component={Bucket} />
            <Route exact path="*" component={Errorpage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const getDispatcher = dispatch => {
  return {
    getDefaultRights: val => dispatch(defaultAuthorization(val))
  };
};

export default connect(
  null,
  getDispatcher
)(App);
