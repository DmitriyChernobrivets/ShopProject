import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { connect } from "react-redux";
import { logout } from "../../../store/Actions/getUser";
import SignIn from "../auth/index";
import Modal from "../../Shared/Modal/Modal";
import PropTypes from "prop-types";
import "./styles.scss";

class Header extends Component {
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
    const { logout, bucketitems, categories, user, history } = this.props;

    return (
      <header className="header">
        {modalIsOpen && (
          <Modal closeModal={this.closeModal} isLogedin={user}>
            <SignIn history={history} />
          </Modal>
        )}

        <HeaderLeft categories={categories} />
        <HeaderRight
          logout={logout}
          user={user}
          bucketitems={bucketitems}
          openModal={this.openModal}
        />
      </header>
    );
  }
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.object.isRequired,
  bucketitems: PropTypes.arrayOf(PropTypes.object).isRequired
};

const getState = state => {
  return {
    categories: state.categories,
    user: state.auth.currentUser,
    bucketitems: state.bucket.items
  };
};

const getDispatcher = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default withRouter(
  connect(
    getState,
    getDispatcher
  )(Header)
);
