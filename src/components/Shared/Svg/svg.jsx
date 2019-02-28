import React from "react";

const Svg = prop => {
  return (
    <svg viewBox="0 0 17 17" height="17" width="17">
      <path d={prop.path} />
    </svg>
  );
};

export default Svg;
