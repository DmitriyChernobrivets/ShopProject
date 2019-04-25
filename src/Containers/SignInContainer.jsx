import React from "react";
import { connect } from "react-redux";
import SignIn from "../components/Blocks/auth/index";
import { getUser, getSignupStatus } from "../Selectors/common";
import { createUser, login, SocialsLoginSuccess } from "../store/Actions/getUser";

const SignInContainer = props => <SignIn {...props} />;

const mapStatetoProps = state => {
  return {
    user: getUser(state),
    signUp: getSignupStatus(state)
  };
};
const getDispatchToProps = dispatch => {
  return {
    login: val => dispatch(login(val)),
    SocialsLoginSuccess: val => dispatch(SocialsLoginSuccess(val)),
    createUser: val => dispatch(createUser(val))
  };
};

export default connect(
  mapStatetoProps,
  getDispatchToProps
)(SignInContainer);
