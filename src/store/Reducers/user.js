import {
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  SOCIALS_LOGIN_SUCCESS
} from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  currentUser: {
    status: "unauthorized",
    token: null,
    error: null
  },

  Signnup: {
    status: "",
    error: null
  }
};

const userReducer = (state = DEFAULT_STATE, { payload, type }) => {
  switch (type) {
    case LOGIN:
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

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: { status: "User", user: payload.newUser, error: null },
        Signnup: {
          status: "Success",
          error: null
        }
      };
    default:
      return state;
  }
};

export default userReducer;
