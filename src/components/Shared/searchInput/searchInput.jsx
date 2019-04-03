import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg from "../Svg/svg";
import "./styles.scss";

class SearchInput extends Component {
  render() {
    const { path } = this.props;

    return (
      <div className="search">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-btn">
          <Svg path={path} viewbox="0 0 17 17" />
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  path: PropTypes.string.isRequired
};

export default SearchInput;
