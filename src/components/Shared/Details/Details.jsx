import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import DefaultButton from "../Button/defaultButton";
import { CSSTransition, transit } from "react-css-transition";
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

    return (
      <Fragment>
        {!disabled && (
          <DefaultButton title="See More" callback={this.toogleDetails} classNames="details-btn" />
        )}
        <CSSTransition
          className="product-description"
          defaultStyle={{ height: 0 }}
          enterStyle={{ height: transit("150px", 400, "ease-in-out") }}
          leaveStyle={{ height: transit("0", 400, "ease-in-out") }}
          activeStyle={{ height: "150px" }}
          active={isOpen}
        >
          <ul className="items-container">
            {Object.keys(description).map(name => (
              <li className="product-description_text" key={name}>
                <span>{name} : </span>
                {description[name]}
              </li>
            ))}
          </ul>
        </CSSTransition>
      </Fragment>
    );
  }
}

Details.propTypes = {
  description: PropTypes.object.isRequired
};

export default Details;
