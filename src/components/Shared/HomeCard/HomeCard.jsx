import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Overlay from "../overlay/Overlay";

const randomColor = () => {
  const random = () => parseInt(Math.random() * 255);
  const regba = `rgba(${random()},${random()},${random()}, 0.3 )`;
  console.log(regba);
  return regba;
};

class HomeCard extends Component {
  state = {
    colors: "transparent"
  };
  changeColor = () => {
    this.setState({
      colors: randomColor()
    });
  };
  removeColor = () => {
    this.setState({
      colors: "transparent"
    });
  };
  render() {
    const { colors, title } = this.state;
    const { category } = this.props;
    return (
      <Col
        className="home-category"
        sm={6}
        lg={4}
        onMouseOver={this.changeColor}
        onMouseLeave={this.removeColor}
      >
        <Link to={"/category/" + category}>
          <img src={"./images/Home/" + category + ".jpg"} alt="Homepage_img" />
          <Overlay color={colors} title={category} />
        </Link>
      </Col>
    );
  }
}
export default HomeCard;
