import React from "react";
import "./styles.scss";

const Modal = props => (
  <div className="signin-modal" onClick={props.click}>
    {props.children}
  </div>
);

export default Modal;
