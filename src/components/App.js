import React, { Component } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ErrorComponent from "./Shared/Errorpage/ErrorComponent";
import Routes from "../service/Routes";
import { NotificationContainer } from "react-notifications";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { Circle2 as Preloader } from "react-preloaders";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    const { defaultAuthorization } = this.props;
    defaultAuthorization();
  }

  render() {
    const { preloaderAll, preloaderID, auth, errHandler, resetError } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          {auth !== "unauthorized" ? (
            <Switch>
              {Object.values(Routes).map((route, idx) => (
                <Route key={idx} {...route} />
              ))}
            </Switch>
          ) : null}
          <NotificationContainer />
          <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />
          {(preloaderAll || preloaderID) && (
            <Preloader color={"red"} bgColor={"rgba(3, 3, 3, 0.1)"} time={1400} />
          )}
          {errHandler && <ErrorComponent title={errHandler} refresh={resetError} />}
        </div>
      </BrowserRouter>
    );
  }
}
App.propTypes = {
  preloaderAll: PropTypes.bool.isRequired,
  preloaderID: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  errHandler: PropTypes.shape({}),
  defaultAuthorization: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired
};
export default App;
