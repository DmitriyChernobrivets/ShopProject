import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { validateInputs } from "../../../helpers/functions";
import { connect } from "react-redux";
import { login, FacebookLoginSuccess } from "../../../store/Actions/getUser";
import { firebase, uiConfig } from "../../../firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import PropTypes from "prop-types";
import "./styles.scss";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };
  FacebookCallback = response => {
    const { FacebookLoginSuccess, history } = this.props;

    FacebookLoginSuccess(response);

    history.push("/");
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  };

  onError = () => {
    this.setState({ error: "Wrond inputs" });
  };
  onsubmit = e => {
    const { error, ...inputs } = this.state;
    const { login } = this.props;
    e.preventDefault();
    if (!validateInputs(inputs)) {
      login(inputs);
    } else {
      this.onError();
    }
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <form className="signin-form">
        <StyledFirebaseAuth
          uiConfig={uiConfig(this.FacebookCallback)}
          firebaseAuth={firebase.auth()}
        />

        <TextField
          error={error ? true : false}
          required
          name="email"
          label="Email"
          defaultValue={username}
          className="name"
          onChange={this.handleInput}
          helperText={error ? "Please fill all fields" : null}
        />
        <TextField
          error={error ? true : false}
          required
          name="password"
          label="Password"
          defaultValue={password}
          className="name"
          type="password"
          onChange={this.handleInput}
          helperText={error ? "Please fill all fields" : null}
        />
        <Button variant="contained" className="signin-form_btn" onClick={this.onsubmit}>
          Login
        </Button>
      </form>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func
};

const getDispatcher = dispatch => {
  return {
    login: val => dispatch(login(val)),
    FacebookLoginSuccess: val => dispatch(FacebookLoginSuccess(val))
  };
};
export default connect(
  null,
  getDispatcher
)(Login);
