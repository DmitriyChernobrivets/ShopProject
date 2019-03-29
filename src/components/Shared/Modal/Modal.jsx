import React from "react";
import "./styles.scss";

const Modal = props => {
  const { closeModal, children, status } = props;
  let modalRef = null;

  if (status === "User") {
    modalRef.click();
    console.log(status);
  }
  return (
    <div
      className="signin-modal"
      onClick={closeModal}
      ref={modal => {
        modalRef = modal;
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
