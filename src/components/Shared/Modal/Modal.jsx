import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogedin) {
      this.el.click();
    }
  }
  render() {
    const { closeModal, children } = this.props;
    return (
      <div
        className="signin-modal"
        onClick={closeModal}
        ref={val => {
          this.el = val;
        }}
      >
        {children}
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Modal;
