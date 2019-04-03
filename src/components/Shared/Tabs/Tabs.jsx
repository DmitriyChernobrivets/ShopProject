import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Tabs = props => {
  const { click, currentTab } = props;
  const isActiveLogin = currentTab === "Login" ? "active-tab" : null;
  const isActiveReg = currentTab === "Registration" ? "active-tab" : null;
  return (
    <div className="signin_tabs">
      <span className={isActiveLogin} onClick={click("Login")}>
        Login
      </span>
      <span className={isActiveReg} onClick={click("Registration")}>
        Registration
      </span>
    </div>
  );
};

Tabs.propTypes = {
  currentTab: PropTypes.string,
  click: PropTypes.func.isRequired
};

export default Tabs;
