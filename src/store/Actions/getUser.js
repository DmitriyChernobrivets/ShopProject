import api from "../../service/api";
import {
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CHANGE_SIGN_TAB,
  SOCIALS_LOGIN_SUCCESS
} from "../../constants/ActionTypes";
import { NotificationManager } from "react-notifications";

const Login = payload => {
  return {
    type: LOGIN,
    payload
  };
};
const Logout = payload => {
  return {
    type: LOGOUT,
    payload
  };
};
const SocialsLoginSuccess = payload => {
  const newUser = {
    firstName: payload.displayName || payload.user.displayName,
    lastName: payload.displayName || payload.user.displayName,
    email: payload.email || payload.user.email
  };
  return {
    type: SOCIALS_LOGIN_SUCCESS,
    payload: newUser
  };
};
const LoginFailure = payload => {
  return {
    type: LOGIN_FAILURE,
    payload
  };
};
const createUsererror = payload => {
  return { type: CREATE_USER_ERROR, payload };
};

const userCreateSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS
  };
};
const changeSignTab = payload => {
  return {
    type: CHANGE_SIGN_TAB,
    payload
  };
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("firebaseui::rememberedAccounts");

  return dispatch =>
    api
      .defaultAuth()
      .then(({ data }) => {
        dispatch(Logout(data));
        localStorage.setItem("token", data.token);
      })
      .catch(err => dispatch(LoginFailure(err.message)));
};

const defaultAuthorization = () => {
  const isSocial = localStorage.getItem("firebaseui::rememberedAccounts");
  const user = JSON.parse(isSocial);
  return dispatch => {
    return api
      .defaultAuth()
      .then(({ data }) => {
        console.log(data);
        if (isSocial) {
          dispatch(SocialsLoginSuccess(user[0]));
        } else {
          dispatch(Login(data));
        }
        localStorage.setItem("token", data.token);
      })
      .catch(err => dispatch(LoginFailure(err.message)));
  };
};

const createUser = userData => {
  return dispatch =>
    api
      .createUser(userData)
      .then(({ data }) => {
        if (data.error) {
          dispatch(createUsererror(data));

          NotificationManager.error(`${data.error}!`);
        } else {
          dispatch(userCreateSuccess());
          dispatch(changeSignTab("Login"));
          NotificationManager.success(`User created!`);
        }
      })
      .catch(
        err =>
          dispatch(createUsererror(err.message)) && NotificationManager.error(`Server error bro !`)
      );
};

const login = userData => {
  return dispatch =>
    api
      .login(userData)
      .then(({ data }) => {
        if (data.Error) {
          dispatch(LoginFailure(data));
          NotificationManager.error(`Error, ${data.Error}`);
        } else {
          dispatch(Login(data));
          localStorage.setItem("token", data.token);
        }
      })
      .catch(err => dispatch(LoginFailure(err.message)));
};

export { defaultAuthorization, login, createUser, changeSignTab, logout, SocialsLoginSuccess };
