import React, { Component } from "react";
import "./searchInput.scss";
import Svg from "../Svg/svg";

class SearchInput extends Component {
  render() {
    const { path } = this.props;

    return (
      <div className="search">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-btn">
          <Svg path={path} />
        </button>
      </div>
    );
  }
}

export default SearchInput;
