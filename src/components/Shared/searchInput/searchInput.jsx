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
          <Svg path={path} viewbox="0 0 17 17"/>
        </button>
      </div>
    );
  }
}

export default SearchInput;
