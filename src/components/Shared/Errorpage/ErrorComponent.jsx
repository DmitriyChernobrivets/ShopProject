import React from "react";

const ErrorComponent = props => {
  const { refresh, title } = props;
  return (
    <div className="error_container">
      <h5 className="error_text">{title || "Error 404"}</h5>
      {refresh ? (
        <button className="error_btn" onClick={refresh}>
          Try again
        </button>
      ) : null}
    </div>
  );
};

export default ErrorComponent;
