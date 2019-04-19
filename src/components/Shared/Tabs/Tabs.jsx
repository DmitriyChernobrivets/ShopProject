import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Tabs = props => {
  const { click, currentTab } = props;
  const isActiveLogin = currentTab === 1 ? "active-tab" : null;
  const isActiveReg = currentTab === 2 ? "active-tab" : null;
  return (
    <div className="signin_tabs">
      <span className={isActiveLogin} onClick={click(1)}>
        Login
      </span>
      <span className={isActiveReg} onClick={click(2)}>
        Registration
      </span>
    </div>
  );
};

Tabs.propTypes = {
  currentTab: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired
};

export default Tabs;
