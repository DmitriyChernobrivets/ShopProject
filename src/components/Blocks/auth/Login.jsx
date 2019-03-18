import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <form className="signin-form">
        <TextField
          required
          name="username"
          label="Username"
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
        {/* <input
          placeholder="LOGIN"
          type="text"
          value={username}
          name="username"
          onChange={this.handleInput}
        />
        <input type="password" name="password" value={password} onChange={this.handleInput} /> */}
      </form>
    );
  }
}
export default Login;
