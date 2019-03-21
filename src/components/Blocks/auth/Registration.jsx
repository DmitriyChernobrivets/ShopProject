import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class Registration extends Component {
  state = {
    firstname: "",
    lastname: "",
    password: "",
    email: ""
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { firstname, lastname, password, email } = this.state;
    return (
      <form className="signin-form">
        <TextField
          required
          name="firstname"
          label="FirstName"
          defaultValue={firstname}
          className="name"
          onChange={this.handleInput}
        />
        <TextField
          required
          name="lastname"
          label="LastName"
          defaultValue={lastname}
          className="name"
          onChange={this.handleInput}
        />

        <TextField
          required
          name="email"
          label="Email"
          defaultValue={email}
          className="name"
          type="email"
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
        <Button variant="contained" className="signin-form_btn">
          Registration
        </Button>
      </form>
    );
  }
}
export default Registration;
