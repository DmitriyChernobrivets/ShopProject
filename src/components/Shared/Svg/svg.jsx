import React from "react";

const Svg = prop => {
  return (
    <svg viewBox={prop.viewbox} height={prop.height || "17"} width={prop.width || "17"}>
      {prop.path.map(el => <path d={el} />)}
      
    </svg>
  );
};

export default Svg;
