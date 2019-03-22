const initialState = {
  currentUser: {
    status: "Guest",
    error: null
  },

  Signnup: {
    status: "",
    error: null
  },
  currentTab: true
};

const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: { ...payload, error: null }
      };
    case "CREATE_USER_ERROR":
      return { ...state, Signnup: { ...payload } };
    case "LOGIN_FAILURE":
      return { ...state, Signnup: { ...payload } };

    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        Signnup: {
          status: "Success",
          error: null
        }
      };
    case "CHANGE_SIGN_TAB":
      return { ...state, currentTab: !state.currentTab };
    default:
      return state;
  }
};

export default userReducer;
