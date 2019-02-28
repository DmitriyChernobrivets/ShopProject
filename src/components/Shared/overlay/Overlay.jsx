import React from "react";
import "./overlay.scss";

const Overlay = ({ color, title }) => {
  console.log(color);
  return (
    <div className="home-overlay" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
    </div>
  );
};

export default Overlay;
