import React, { Component, Fragment } from "react";
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
import { Circle2 as Preloader } from "react-preloaders";

class App extends Component {
  componentDidMount() {
    this.props.defaultAuthorization();
  }

  render() {
    const { preloaderAll, preloaderID, auth } = this.props;
    return (
      <BrowserRouter>
        <Fragment>
          <Header />

          <NotificationContainer />
          <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
          {(preloaderAll || preloaderID) && (
            <Preloader color={"red"} bgColor={"rgba(3, 3, 3, 0.2)"} time={1400} />
          )}
          {auth !== "unauthorized" ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category/:categories" component={Main} />
              <Route exact path="/category/:categories/:id" component={CardInfo} />
              <Route path="/bucket" component={Bucket} />
              <Route path="*" component={NotFounded} />
            </Switch>
          ) : null}
        </Fragment>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    preloaderAll: state.allProducts.preloader,
    preloaderID: state.currentProductInfo.loading,
    auth: state.auth.currentUser.status
  };
};

const getDispatcher = dispatch => {
  return {
    defaultAuthorization: () => dispatch(defaultAuthorization())
  };
};

export default connect(
  mapStateToProps,
  getDispatcher
)(App);
