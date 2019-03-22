import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { options } from "../../Shared/Svg/options";
import SVG from "../../Shared/Svg/svg";

import SignIn from "../auth/SignIn";

const { CABINET, BUCKET } = options;

class HeaderComponents extends Component {
  state = {
    modalIsOpen: false
  };
  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };
  closeModal = e => {
    if (e.target.className.includes("signin-modal")) {
      this.setState({
        modalIsOpen: false
      });
    }
  };
  render() {
    const { modalIsOpen } = this.state;
    return (
      <header className="header">
        {modalIsOpen && <SignIn closeModal={this.closeModal} />}
        <div className="left-panel">
          <div>Just Smile</div>
        </div>
        <div className="header-left">
          <ul className="menu">
            {this.props.categories.map((category, idx) => (
              <li className="menu-item" key={idx}>
                <Link to={"/category/" + category}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-right">
          <div className="header-auth">
            {this.props.user.status !== "Guest" ? (
              <span>Cabinet</span>
            ) : (
              <span className="user-office" onClick={this.openModal}>
                <SVG path={CABINET} viewbox="0 0 36 32" height="23" width="23" />
              </span>
            )}

            <Link to="/bucket" className="user-bucket">
              <SVG path={BUCKET} viewbox="0 0 32 32" height="23" width="23" />
            </Link>

            {/* <SignIn /> */}
          </div>
        </div>
      </header>
    );
  }
}

const getState = state => {
  return {
    categories: state.categories,
    user: state.auth.currentUser
  };
};

export default connect(getState)(HeaderComponents);
