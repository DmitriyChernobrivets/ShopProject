import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createUser } from "../../../store/Actions/getUser";
import { validateInputs } from "../../../helpers/functions";
import { NotificationManager } from "react-notifications";
import PropTypes from "prop-types";
import "./styles.scss";
class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    comparepassword: "",
    email: "",
    error: null
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  };
  onError = val => {
    this.setState({ error: val });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { error, ...inputs } = this.state;
    const { createUser } = this.props;
    const ispasswordmatch =
      this.password.props.defaultValue === this.comparepassword.props.defaultValue;
    const isinputsEmpty = validateInputs(inputs);

    if (isinputsEmpty) {
      this.onError("Wrong Inputs");
      NotificationManager.error("Wrong Inputs");
    } else if (!ispasswordmatch) {
      NotificationManager.error("Passwords do not match");
    } else {
      createUser(inputs);
    }
  };

  render() {
    const { firstname, lastname, password, email, error, comparepassword } = this.state;

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
          ref={val => {
            this.password = val;
          }}
        />
        <TextField
          error={error ? true : false}
          required
          name="comparepassword"
          label="Reapeat password"
          defaultValue={comparepassword}
          className="name"
          type="password"
          onChange={this.handleInput}
          helperText={error ? "Please fill all fields" : null}
          ref={val => {
            this.comparepassword = val;
          }}
        />
        <Button variant="contained" className="signin-form_btn" onClick={this.handleSubmit}>
          Registration
        </Button>
      </form>
    );
  }
}

Registration.propTypes = {
  createUser: PropTypes.func
};

const getDispatcher = dispatch => {
  return {
    createUser: val => dispatch(createUser(val))
  };
};
export default connect(
  null,
  getDispatcher
)(Registration);
