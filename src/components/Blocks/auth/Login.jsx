import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { validateInputs } from "../../../helpers/functions";
import { connect } from "react-redux";
import { login } from "../../../store/Actions/getUser";
class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
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
// const getState = state => {
//   return {
//     user: state.auth.currentUser
//   };
// };
const getDispatcher = dispatch => {
  return {
    login: val => dispatch(login(val))
  };
};
export default connect(
  null,
  getDispatcher
)(Login);
