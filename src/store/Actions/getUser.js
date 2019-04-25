import api from "../../service/api";
import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  CREATE_USER_ERROR,
  ERROR_MSG_RESET,
  SOCIALS_LOGIN_SUCCESS
} from "../../constants/ActionTypes";
import { NotificationManager } from "react-notifications";

const Login = payload => {
  return {
    type: LOGIN_SUCCESS,
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

const resetError = () => {
  window.location.reload();
  return {
    type: ERROR_MSG_RESET
  };
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("firebaseui::rememberedAccounts");

  return async dispatch => {
    try {
      const { data } = await api.defaultAuth();
      dispatch(Logout(data));
      localStorage.setItem("token", data.token);
    } catch (err) {
      dispatch(LoginFailure(err.response));
    }
  };
};

const defaultAuthorization = () => {
  const isSocial = localStorage.getItem("firebaseui::rememberedAccounts");
  const user = JSON.parse(isSocial);

  return async dispatch => {
    try {
      const { data } = await api.defaultAuth();
      if (isSocial) {
        dispatch(SocialsLoginSuccess(user[0]));
      } else {
        dispatch(Login(data));
      }
      localStorage.setItem("token", data.token);
    } catch (err) {
      dispatch(LoginFailure(err.response));
    }
  };
};

const createUser = userData => {
  return async dispatch => {
    try {
      const { data } = await api.createUser(userData);

      if (data.Error) {
        dispatch(createUsererror(data));

        NotificationManager.error(`${data.Error}!`);
      } else {
        dispatch(login({ email: userData.email, password: userData.password }));
        NotificationManager.success(`User created!`);
      }
    } catch (err) {
      dispatch(createUsererror(err.response)) && NotificationManager.error(`Server error bro !`);
    }
  };
};

const login = userData => {
  return async dispatch => {
    try {
      const { data } = await api.login(userData);

      if (data.Error) {
        dispatch(LoginFailure(data));
        NotificationManager.error(`Error, ${data.Error}`);
      } else {
        dispatch(Login(data));
        localStorage.setItem("token", data.token);
      }
    } catch (err) {
      dispatch(LoginFailure(err.response));
    }
  };
};

export { defaultAuthorization, login, createUser, logout, SocialsLoginSuccess, resetError };
