import React, { Component } from "react";
import Header from "./Blocks/Header/index";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ErrorComponent from "./Shared/Errorpage/ErrorComponent";
import { connect } from "react-redux";
import Routes from "../service/Router";
import { defaultAuthorization, resetError } from "../store/Actions/getUser";
import { NotificationContainer } from "react-notifications";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { Circle2 as Preloader } from "react-preloaders";

class App extends Component {
  state = {
    categories: ["Notebooks", "Mobile", "PCs"]
  };
  componentDidMount() {
    this.props.defaultAuthorization();
  }

  render() {
    const { preloaderAll, preloaderID, auth, errHandler, resetError } = this.props;
    const { categories } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header categories={categories} />
          {auth !== "unauthorized" ? (
            <Switch>
              {Object.values(Routes).map((route, idx) =>
                route.path === "/" ? (
                  <Route
                    key={idx}
                    exact={route.exact}
                    path={route.path}
                    render={() => <route.component categories={categories} />}
                  />
                ) : (
                  <Route key={idx} {...route} />
                )
              )}
            </Switch>
          ) : null}
          <NotificationContainer />
          <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
          {(preloaderAll || preloaderID) && (
            <Preloader color={"red"} bgColor={"rgba(3, 3, 3, 0.1)"} time={1400} />
          )}
          {errHandler && <ErrorComponent title={errHandler} refresh={resetError} />}
          )}
        </div>
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
