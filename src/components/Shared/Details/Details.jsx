import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class Details extends Component {
  state = {
    seeMore: false,
    disabled: false
  };
  componentDidMount() {
    const { disabled } = this.props;
    if (disabled) {
      this.setState({ seeMore: true, disabled: true });
    }
  }
  seeMore = () => {
    this.setState(prevState => ({
      seeMore: !prevState.seeMore
    }));
  };
  render() {
    const { seeMore, disabled } = this.state;
    const { description } = this.props;
    return (
      <div className="product-description">
        {seeMore
          ? Object.keys(description).map(name => (
              <p className="product-description_text" key={name}>
                <span>{name} : </span>
                {description[name]}
              </p>
            ))
          : null}
        {!disabled && (
          <span className="see-more" href="#" onClick={this.seeMore}>
            See Details
          </span>
        )}
      </div>
    );
  }
}

Details.propTypes = {
  description: PropTypes.object.isRequired
};

export default Details;
