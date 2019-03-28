import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { options } from "../../Shared/Svg/options";
import SVG from "../../Shared/Svg/svg";
import UserPanel from "../auth/UserPanel";
import { defaultAuthorization } from "../../../store/Actions/getUser";
import SignIn from "../auth/SignIn";
import { CSSTransition } from "react-transition-group";
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
    console.log(e);
    if (e.target.className.includes("signin-modal")) {
      this.setState({
        modalIsOpen: false
      });
    }
  };

  render() {
    const { modalIsOpen } = this.state;
    const { user } = this.props.user;
    const { defaultAutorization, bucketitems } = this.props;
    return (
      <header className="header">
        {modalIsOpen && <SignIn closeModal={this.closeModal} />}
        <div className="left-panel">
          <div>Just Smile</div>
        </div>
        <div className="header-left">
          <ul className="menu">
            {this.props.categories.map(category => (
              <li className="menu-item" key={category}>
                <Link to={"/category/" + category}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-right">
          <div className="user-auth">
            {this.props.user.status !== "Guest" ? (
              <UserPanel logout={defaultAutorization} user={user} />
            ) : (
              <div className="user-controls" onClick={this.openModal}>
                <SVG path={CABINET} viewbox="0 0 36 32" height="23" width="23" />
              </div>
            )}
          </div>

          <div className="user-bucket">
            <Link to="/bucket">
              <SVG path={BUCKET} viewbox="0 0 32 32" height="23" width="23" />
            </Link>
            {bucketitems.length !== 0 ? (
              <div className="bucket-count">{bucketitems.length}</div>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}

const getState = state => {
  return {
    categories: state.categories,
    user: state.auth.currentUser,
    bucketitems: state.bucket.items
  };
};

const getDispatcher = dispatch => {
  return {
    defaultAutorization: () => dispatch(defaultAuthorization())
  };
};
export default connect(
  getState,
  getDispatcher
)(HeaderComponents);
