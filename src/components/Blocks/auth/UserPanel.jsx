import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Header/styles.scss";

class UserPanel extends Component {
  state = {
    dropDown: false
  };
  openUserMenu = e => {
    e.preventDefault();

    this.setState({ dropDown: true }, () => {
      document.addEventListener("click", this.closeUserMenu);
    });
  };
  closeUserMenu = e => {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ dropDown: false }, () => {
        document.removeEventListener("click", this.closeUserMenu);
      });
    }
  };
  componentWillUnmount() {
    document.removeEventListener("click", this.closeUserMenu);
  }
  logout = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    const { dropDown } = this.state;
    const { user } = this.props;
    const isdpMenuOpen = dropDown ? "dp-menu dp-open" : "dp-menu";
    return (
      <div className="user-garage">
        <div className="welcome">Welcome, dear</div>
        <div className="user-img" onClick={this.openUserMenu}>
          <span>
            {user.firstName[0].toUpperCase()}.{user.lastName[0].toUpperCase()}
          </span>
        </div>

        <ul className={isdpMenuOpen} ref={val => (this.dropdownMenu = val)}>
          <li>
            <span>
              <i className="fas fa-sign-out-alt" />
              cabinet
            </span>
          </li>
          <li>
            <span onClick={this.logout}>
              <i className="fas fa-user-tie" />
              logout
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

UserPanel.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default UserPanel;
