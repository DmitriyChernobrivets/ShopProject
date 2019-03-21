import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Registration from "./Registration";
import Login from "./Login";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./signin.scss";

class SignIn extends Component {
  state = {
    currentTab: "Login",
    active: true
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentTab !== this.state.currentTab;
  }
  render() {
    const { currentTab, active } = this.state;

    return (
      <Container>
        <Row>
          <Col lg={{ offset: 3, span: 6 }}>
            <div className="signin-container">
              <div className="signin_tabs">
                <span
                  className={currentTab === "Login" ? "active" : null}
                  onClick={() => this.setState({ currentTab: "Login" })}
                >
                  Login
                </span>
                <span
                  className={currentTab === "Registration" ? "active" : null}
                  onClick={() => this.setState({ currentTab: "Registration" })}
                >
                  Reg
                </span>
                {this.props.children}
              </div>
              {currentTab === "Login" ? <Login history={this.props.history} /> : <Registration />}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
const getState = state => {
  return {
    user: state.auth.payload
  };
};
export default connect(getState)(SignIn);
