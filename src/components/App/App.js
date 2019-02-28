import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderComponents from "../Blocks/Header/Header";
import Main from "../Blocks/main/main";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CardInfo from "../Blocks/CardInfo/CardInfo";
import Home from "../Blocks/Home/Home";
// import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderComponents />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categories" component={Main} />
            <Route exact path="/category/:categories/:id" component={CardInfo} />
            {/* <Route path="/login" component={Login} />
            <Route path="/registration" component={Reagistration} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.test
  };
};

export default connect(mapStateToProps)(App);
