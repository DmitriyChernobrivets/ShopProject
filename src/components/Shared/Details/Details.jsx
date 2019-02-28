import "./details.scss";

import React, { Component } from "react";

class Details extends Component {
  state = {
    seeMore: false
  };
  seeMore = () => {
    this.setState(prevState => ({
      seeMore: !prevState.seeMore
    }));
  };
  render() {
    const { seeMore } = this.state;
    const { description } = this.props;
    return (
      <div className="product-description">
        {Object.keys(description).map((name, idx) => {
          if (idx < 3) {
            return (
              <p className="product-description_text" key={idx}>
                <span>{name} : </span>
                {description[name]}
              </p>
            );
          } else
            return (
              <div className={!seeMore ? "js-box open-content" : "js-box hide-content"}>
                <p className="product-description_text" key={idx}>
                  <span>{name} : </span>
                  {description[name]}
                </p>
              </div>
            );
        })}
        <span className="see-more" href="#" onClick={this.seeMore}>
          See more
        </span>
      </div>
    );
  }
}

export default Details;
