import React from "react";
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

export default Tabs;
