import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { validateInputs } from "../../../helpers/functions";
import { connect } from "react-redux";
import { login } from "../../../store/Actions/getUser";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import PropTypes from "prop-types";
import "./styles.scss";

firebase.initializeApp({
  apiKey: "AIzaSyBNEZMSCgfoizQ9tAL0SMNDk62HsE9ROJo",
  authDomain: "shop-project-4ccad.firebaseapp.com"
});
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    isSignedIn: false
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => true
    }
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }
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
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
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
    login: val => dispatch(login(val))
  };
};
export default connect(
  null,
  getDispatcher
)(Login);
