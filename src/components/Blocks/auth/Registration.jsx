import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createUser } from "../../../store/Actions/getUser";
import { validateInputs } from "../../../helpers/functions";

class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
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
  handleSubmit = e => {
    e.preventDefault();
    const { error, ...inputs } = this.state;
    const { createUser } = this.props;
    if (!validateInputs(inputs)) {
      createUser(inputs);
    } else {
      this.onError();
    }
  };

  render() {
    const { firstname, lastname, password, email, error } = this.state;

    return (
      <form className="signin-form">
        <TextField
          error={error ? true : false}
          required
          name="firstName"
          label="FirstName"
          defaultValue={firstname}
          className="name"
          onChange={this.handleInput}
          helperText={error ? "Please fill all fields" : null}
        />
        <TextField
          error={error ? true : false}
          required
          name="lastName"
          label="LastName"
          defaultValue={lastname}
          className="name"
          onChange={this.handleInput}
          helperText={error ? "Please fill all fields" : null}
        />

        <TextField
          error={error ? true : false}
          required
          name="email"
          label="Email"
          defaultValue={email}
          className="name"
          type="email"
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
        <Button variant="contained" className="signin-form_btn" onClick={this.handleSubmit}>
          Registration
        </Button>
      </form>
    );
  }
}

const getDispatcher = dispatch => {
  return {
    createUser: val => dispatch(createUser(val))
  };
};
export default connect(
  null,
  getDispatcher
)(Registration);
