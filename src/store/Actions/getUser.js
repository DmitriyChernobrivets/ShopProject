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
      .auth({ email: "aasdas", password: "12345" })
      .then(el => {
        dispatch(setDefaultAuth(el.data));
        localStorage.setItem("token", el.data.token);
      })
      .catch(err => console.log(err.message));
};

export { defaultAuthorization };
