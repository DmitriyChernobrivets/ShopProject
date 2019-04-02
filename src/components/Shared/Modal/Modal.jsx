import React, { Component } from "react";
import "./styles.scss";

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

export default Modal;
