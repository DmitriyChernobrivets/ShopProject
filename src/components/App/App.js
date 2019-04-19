import React, { Component, Fragment } from "react";
import Header from "../Blocks/Header/index";
import Main from "../Blocks/main/index";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CardInfo from "../Blocks/CardInfo/index";
import Home from "../Blocks/Home/Home";
import ErrorComponent from "../Shared/Errorpage/ErrorComponent";
import Bucket from "../Blocks/Bucket/index";
import { connect } from "react-redux";
import { defaultAuthorization, resetError } from "../../store/Actions/getUser";
import { NotificationContainer } from "react-notifications";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { Circle2 as Preloader } from "react-preloaders";
import "./styles.scss";

class App extends Component {
  componentDidMount() {
    this.props.defaultAuthorization();
  }

  render() {
    const { preloaderAll, preloaderID, auth, errHandler, resetError } = this.props;

    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          {errHandler && <ErrorComponent title={errHandler} refresh={resetError} />}
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
              <Route path="*" component={ErrorComponent} />
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
    auth: state.auth.currentUser.status,
    errHandler: state.error
  };
};

const getDispatcher = dispatch => {
  return {
    defaultAuthorization: () => dispatch(defaultAuthorization()),
    resetError: () => dispatch(resetError())
  };
};

export default connect(
  mapStateToProps,
  getDispatcher
)(App);
