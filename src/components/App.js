import React from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import { Switch, Route } from "react-router-dom";
import ErrorComponent from "./Shared/Errorpage/ErrorComponent";
import Routes from "../service/Routes";
import { NotificationContainer } from "react-notifications";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { Circle2 as Preloader } from "react-preloaders";
import LoaderID from "./Shared/Preloader/loader";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
const App = props => {
  const { preloaderAll, preloaderID, errHandler, resetError } = props;
  return (
    <Router>
      <div className="App">
        <HeaderContainer />

        <Switch>
          {Object.values(Routes).map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>

        <NotificationContainer />

        <ScrollUpButton style={{ fill: "red", borderColor: "red" }} />

        {preloaderAll && <Preloader color={"red"} bgColor={"rgba(3, 3, 3, 0.1)"} time={1400} />}
        {preloaderID && <LoaderID />}
        {errHandler && <ErrorComponent title={errHandler} refresh={resetError} />}
      </div>
    </Router>
  );
};
App.propTypes = {
  preloaderAll: PropTypes.bool.isRequired,
  preloaderID: PropTypes.bool.isRequired,
  errHandler: PropTypes.shape({}),
  defaultAuthorization: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired
};
export default App;
