import React from "react";

const Svg = prop => {
  return (
    <svg viewBox={prop.viewbox} height={prop.height || "17"} width={prop.width || "17"}>
      {prop.path.map((el, idx) => (
        <path d={el} key={idx} />
      ))}
    </svg>
  );
};

export default Svg;
