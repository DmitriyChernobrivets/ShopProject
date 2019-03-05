import React from "react";

const Svg = prop => {
  return (
    <svg viewBox={prop.viewbox} height="17" width="17">
      <path d={prop.path} />
    </svg>
  );
};

export default Svg;
