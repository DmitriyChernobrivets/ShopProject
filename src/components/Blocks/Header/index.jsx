import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { connect } from "react-redux";
import { logout } from "../../../store/Actions/getUser";
import SignIn from "../auth/index";
import PropTypes from "prop-types";
import { slide as Hamburger } from "react-burger-menu";
import { Modal } from "react-bootstrap";
import Media from "react-media";

// import "./styles.scss";

class Header extends Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { logout, bucketitems, categories, user, history } = this.props;

    return (
      <header className="header">
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Hamburger>
                <HeaderLeft hide categories={categories} />
              </Hamburger>
            ) : (
              <HeaderLeft categories={categories} />
            )
          }
        </Media>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <SignIn history={history} hideModal={this.handleClose} />
        </Modal>

        <HeaderRight
          logout={logout}
          user={user}
          bucketitems={bucketitems}
          openModal={this.handleShow}
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
