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
              {errHandler && <ErrorComponent title={errHandler} refresh={resetError} />}
              <NotificationContainer />
              <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
              {(preloaderAll || preloaderID) && (
                <Preloader color={"red"} bgColor={"rgba(3, 3, 3, 0.1)"} time={1400} />
              )}
              {auth !== "unauthorized" ? (
                <TransitionGroup component={null}>
                  <CSSTransition key={location.key} classNames="fadeAnimation" timeout={500}>
                    <Switch location={location}>
                      <Route exact path="/" render={() => <Home categories={categories} />} />
                      <Route exact path="/category/:categories" component={Main} />
                      <Route path="/category/:categories/:id" component={CardInfo} />
                      <Route path="/bucket" component={Bucket} />
                      <Route path="*" component={ErrorComponent} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              ) : null}
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
