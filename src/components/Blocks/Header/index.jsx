import React, { Component } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import PropTypes from "prop-types";
import { slide as Hamburger } from "react-burger-menu";
import { Modal } from "react-bootstrap";
import Media from "react-media";
import SignInContainer from "../../../Containers/SignInContainer";
import categories from "../../../constants/categories";

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
    const { logout, bucketitems, user, history } = this.props;

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
          <SignInContainer history={history} hideModal={this.handleClose} />
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
  user: PropTypes.object.isRequired,
  bucketitems: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Header;
