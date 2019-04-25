import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { validateInputs } from "../../../helpers/functions";
import { firebase, uiConfig } from "../../../firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    email: "admin@ukr.net",
    password: "admin",
    error: null
  };
  SocialsCallback = response => {
    const { SocialsLoginSuccess, history } = this.props;

    SocialsLoginSuccess(response);

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
    const { email, password, error } = this.state;

    return (
      <form className="signin-form">
        <StyledFirebaseAuth
          uiConfig={uiConfig(this.SocialsCallback)}
          firebaseAuth={firebase.auth()}
        />

        <TextField
          error={error ? true : false}
          required
          name="email"
          label="Email"
          defaultValue={email}
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

export default Login;
