import api from "../../module/api";

const setDefaultAuth = payload => {
  return {
    type: "GET_DEFAULT_RIGHTS",
    payload
  };
};

const defaultAuthorization = () => {
  return dispatch =>
    api
      .defaultAuth()
      .then(el => {
        dispatch(setDefaultAuth(el.data));
        localStorage.setItem("token", el.data.token);
      })
      .catch(err => console.log(err.message));
};

const login = userData => {
  return dispatch =>
    api
      .auth(userData)
      .then(el => {
        dispatch(setDefaultAuth(el.data));
        localStorage.setItem("token", el.data.token);
      })
      .catch(err => console.log(err.message));
};
export { defaultAuthorization, login };
