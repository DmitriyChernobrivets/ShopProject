import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createUser } from "../../../store/Actions/getUser";

class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
    // error: null
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { createUser } = this.props;

    // if (this.inputsValidation()) {
    createUser(this.state);
    // }
  };
  // inputsValidation = () => {
  //   const isEmpty = Object.keys(this.state).find(el => {
  //     if (this.state[el] !== null) {
  //       return this.state[el].length === 0;
  //     }
  //   });
  //   if (isEmpty) {
  //     this.setState({
  //       error: "wrong inputs"
  //     });
  //     return false;
  //   }
  //   return true;
  // };
  render() {
    const { firstname, lastname, password, email } = this.state;
    // const { error } = this.props;

    return (
      <form className="signin-form">
        <TextField
          // error={error ? true : false}
          required
          name="firstName"
          label="FirstName"
          defaultValue={firstname}
          className="name"
          onChange={this.handleInput}
        />
        <TextField
          // error={error ? true : false}
          required
          name="lastName"
          label="LastName"
          defaultValue={lastname}
          className="name"
          onChange={this.handleInput}
        />

        <TextField
          // error={error ? true : false}
          required
          name="email"
          label="Email"
          defaultValue={email}
          className="name"
          type="email"
          onChange={this.handleInput}
        />
        <TextField
          // error={error ? true : false}
          required
          name="password"
          label="Password"
          defaultValue={password}
          className="name"
          type="password"
          onChange={this.handleInput}
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
