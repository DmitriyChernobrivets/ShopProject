import React, { Component, Fragment } from "react";
import Header from "../Blocks/Header/index";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ErrorComponent from "../Shared/Errorpage/ErrorComponent";
import { connect } from "react-redux";
import Routes from "../../service/Router";
import { defaultAuthorization, resetError } from "../../store/Actions/getUser";
import { NotificationContainer } from "react-notifications";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { Circle2 as Preloader } from "react-preloaders";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.scss";

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
        <Route
          render={({ location }) => (
            <Fragment>
              <Header categories={categories} />

              {auth !== "unauthorized" ? (
                <TransitionGroup component={null}>
                  <CSSTransition key={location.key} classNames="fadeAnimation" timeout={500}>
                    <Switch location={location}>
                      {Object.values(Routes).map((route, idx) =>
                        route.path === "/" ? (
                          <Route
                            key={String(idx)}
                            exact={route.exact}
                            path={route.path}
                            render={() => <route.component categories={categories} />}
                          />
                        ) : (
                          <Route key={String(idx)} {...route} />
                        )
                      )}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              ) : null}

              <NotificationContainer />
              <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
              {(preloaderAll || preloaderID) && (
                <Preloader color={"red"} bgColor={"rgba(3, 3, 3, 0.1)"} time={1400} />
              )}

              {errHandler && <ErrorComponent title={errHandler} refresh={resetError} />}
            </Fragment>
          )}
        />
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
