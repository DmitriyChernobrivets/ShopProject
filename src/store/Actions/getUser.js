import api from "../../service/api";

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
      .catch(err => console.log(err.message));
};

const createUser = userData => {
  return dispatch =>
    api
      .createUser(userData)
      .then(({ data }) =>
        data.error ? dispatch(createUsererror(data)) : dispatch(userCreateSuccess())
      )
      .catch(err => dispatch(createUsererror(err.message)));
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
