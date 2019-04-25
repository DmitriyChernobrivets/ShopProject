import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  CREATE_USER_ERROR,
  SOCIALS_LOGIN_SUCCESS
} from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  currentUser: {
    status: "unauthorized",
    token: null,
    error: null
  },

  Signnup: {
    status: null,
    error: null
  }
};

const userReducer = (state = DEFAULT_STATE, { payload, type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: { ...payload, error: null },
        Signnup: {
          status: "Success",
          error: null
        }
      };
    case SOCIALS_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: {
          status: "User",
          user: payload,
          error: null
        }
      };
    case CREATE_USER_ERROR:
      return { ...state, Signnup: payload };
    case LOGOUT:
      return { ...state, currentUser: { ...payload, error: null } };
    case LOGIN_FAILURE:
      return { ...state, Signnup: payload };

    default:
      return state;
  }
};

export default userReducer;
