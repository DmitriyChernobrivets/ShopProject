import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login } from "../../../store/Actions/getUser";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onsubmit = e => {
    const { login } = this.props;
    e.preventDefault();
    login(this.state);
  };
  render() {
    const { username, password } = this.state;
    const { user } = this.props;

    return (
      <form className="signin-form">
        <TextField
          required
          name="email"
          label="Email"
          defaultValue={username}
          className="name"
          onChange={this.handleInput}
        />
        <TextField
          required
          name="password"
          label="Password"
          defaultValue={password}
          className="name"
          type="password"
          onChange={this.handleInput}
        />
        <Button variant="contained" className="signin-form_btn" onClick={this.onsubmit}>
          Login
        </Button>
      </form>
    );
  }
}
const getState = state => {
  return {
    user: state.auth.currentUser
  };
};
const getDispatcher = dispatch => {
  return {
    login: val => dispatch(login(val))
  };
};
export default connect(
  getState,
  getDispatcher
)(Login);
