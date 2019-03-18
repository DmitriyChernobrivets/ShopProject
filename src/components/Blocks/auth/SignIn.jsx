import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Registration from "./Registration";
import Login from "./Login";
import "./signin.scss";

class SignIn extends Component {
  state = {
    currentTab: "Login"
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentTab !== this.state.currentTab;
  }
  render() {
    const { currentTab } = this.state;

    return (
      <Container>
        <Row>
          <Col className="signin-container" lg={12}>
            <button onClick={() => this.setState({ currentTab: "Login" })}>Login</button>
            <button onClick={() => this.setState({ currentTab: "Registration" })}>Reg</button>
            {currentTab === "Login" ? <Login /> : <Registration />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
