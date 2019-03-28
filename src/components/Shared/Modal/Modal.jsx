import React from "react";
import "./styles.scss";

const Modal = props => {
  return (
    <div className="signin-modal" onClick={props.closeModal}>
      {props.children}
    </div>
  );
};

export default Modal;
