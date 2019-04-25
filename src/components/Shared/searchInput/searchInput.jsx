import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg from "../Svg/svg";
import { Col } from "react-bootstrap";

class SearchInput extends Component {
  state = {
    value: ""
  };
  handleInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.input.value === "") {
      return;
    }
    const { getProductBySearchInput, sort } = this.props;
    const { value } = this.state;
    getProductBySearchInput({ value, sort });
  };
  render() {
    const { path } = this.props;

    return (
      <Col>
        <form className="search" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search by title"
            onChange={this.handleInput}
            ref={val => (this.input = val)}
          />
          <button className="search-btn" onClick={this.onSubmit}>
            <Svg path={path} viewbox="0 0 17 17" />
          </button>
        </form>
      </Col>
    );
  }
}

SearchInput.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SearchInput;
