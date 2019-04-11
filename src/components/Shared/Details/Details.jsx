import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class Details extends Component {
  state = {
    isOpen: false,
    disabled: false
  };
  componentDidMount() {
    const { disabled } = this.props;
    if (disabled) {
      this.setState({ isOpen: true, disabled: true });
    }
  }
  toogleDetails = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  render() {
    const { isOpen, disabled } = this.state;
    const { description } = this.props;
    const isActive = !isOpen
      ? "far fa-arrow-alt-circle-down"
      : "far fa-arrow-alt-circle-down details-acive";
    return (
      <div className="product-description">
        {isOpen ? (
          <ul className="items-container">
            {Object.keys(description).map(name => (
              <li className="product-description_text" key={name}>
                <span>{name} : </span>
                {description[name]}
              </li>
            ))}
          </ul>
        ) : null}
        {!disabled && (
          <div className="see-more" onClick={this.toogleDetails}>
            <i class={isActive} />
            <span>Details</span>
          </div>
        )}
      </div>
    );
  }
}

Details.propTypes = {
  description: PropTypes.object.isRequired
};

export default Details;
