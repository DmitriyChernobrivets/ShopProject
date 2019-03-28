import api from "../../service/api";
import { NotificationManager } from "react-notifications";

const Login = payload => {
  return {
    type: "LOGIN",
    payload
  };
};
const LoginFailure = payload => {
  return {
    type: "LOGIN_FAILURE",
    payload
  };
};
const createUsererror = payload => {
  return {
    type: "CREATE_USER_ERROR",
    payload
  };
};

const userCreateSuccess = () => {
  return {
    type: "CREATE_USER_SUCCESS"
  };
};
const changeSignTab = payload => {
  return {
    type: "CHANGE_SIGN_TAB",
    payload
  };
};

const defaultAuthorization = () => {
  return dispatch =>
    api
      .defaultAuth()
      .then(el => {
        dispatch(Login(el.data));
        localStorage.setItem("token", el.data.token);
      })
      .catch(err => dispatch(LoginFailure(err.message)));
};

const createUser = userData => {
  return dispatch =>
    api
      .createUser(userData)
      .then(({ data }) => {
        if (data.error) {
          dispatch(createUsererror(data));
          NotificationManager.success(`Sorry bro :(`);
        } else {
          dispatch(userCreateSuccess());
          dispatch(changeSignTab("Login"));
          NotificationManager.success(`Welcome, ${data.user.firstName}`);
        }
      })
      .catch(
        err =>
          dispatch(createUsererror(err.message)) &&
          NotificationManager.success(`Server error bro !`)
      );
};

const login = userData => {
  return dispatch =>
    api
      .auth(userData)
      .then(({ data }) => {
        if (data.Error) {
          dispatch(LoginFailure(data));
        } else {
          dispatch(Login(data));
          localStorage.setItem("token", data.token);
        }
      })
      .catch(err => dispatch(LoginFailure(err.message)));
};

export { defaultAuthorization, login, createUser, changeSignTab };
