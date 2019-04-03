import React from "react";
import PropTypes from "prop-types";

const Svg = prop => {
  const { path, viewbox, height, width } = prop;
  return (
    <svg viewBox={viewbox} height={height || "17"} width={width || "17"}>
      {path.map((el, idx) => (
        <path d={el} key={idx} />
      ))}
    </svg>
  );
};

Svg.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Svg;
