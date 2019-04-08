import {
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CHANGE_SIGN_TAB
} from "../../constants/ActionTypes";

const DEFAULT_STATE = {
  currentUser: {
    status: "Guest",
    error: null
  },

  Signnup: {
    status: "",
    error: null
  },
  currentTab: "Login"
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
    case CREATE_USER_ERROR:
      return { ...state, Signnup: payload };
    case LOGOUT:
      return { ...state, currentUser: { ...payload, error: null } };
    case LOGIN_FAILURE:
      return { ...state, Signnup: payload };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        Signnup: {
          status: "Success",
          error: null
        }
      };
    case CHANGE_SIGN_TAB:
      return { ...state, currentTab: payload };
    default:
      return state;
  }
};

export default userReducer;
