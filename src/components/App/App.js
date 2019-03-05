import React, { Component } from "react";

import HeaderComponents from "../Blocks/Header/Header";
import Main from "../Blocks/main/main";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CardInfo from "../Blocks/CardInfo/CardInfo";
import Home from "../Blocks/Home/Home";
import Bucket from "../Blocks/Bucket/Bucket";
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
            <Route exact path="/bucket" component={Bucket} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
