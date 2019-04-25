//BUCKET
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UPDATE_BUCKET = "UPDATE_BUCKET";
const ADD_TO_BUCKET = "ADD_TO_BUCKET";
const DELETE_ITEM = "DELETE_ITEM";

//FEEDBACK
const GET_FEEDBACK_ITEMS = "GET_FEEDBACK_ITEMS";
const ERROR_FEEDBACK = "ERROR_FEEDBACK";
const SUCCESS_SENDED_FEEDBACK = "SUCCESS_SENDED_FEEDBACK";

//Products by id
const GET_PRODUCT_ID = "GET_PRODUCT_ID";
const GET_PRODUCT_ID_FAILURE = "GET_PRODUCT_ID_FAILURE";
const PRODUCT_ID_PRELOADER = "PRODUCT_ID_PRELOADER";

// All products && filters
const GET_PRODUCTS = "GET_PRODUCTS";
const TURN_ON_PRELOADER = "TURN_ON_PRELOADER";
const SET_FILTERS = "SET_FILTERS";
const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
const RESET_FILTERS = "RESET_FILTERS";
const RESET_STORE_BY_ID = "RESET_STORE_BY_ID";
const RESET_STORE_ALL_PRODUCTS = "RESET_STORE_ALL_PRODUCTS";
const EMPTY_PRODUCT_LIST = "EMPTY_PRODUCT_LIST";

//User & Auth
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const CREATE_USER_ERROR = "CREATE_USER_ERROR";
// const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
const SOCIALS_LOGIN_SUCCESS = "SOCIALS_LOGIN_SUCCESS";

//Error

const ERROR_MSG = "ERROR_MSG";
const ERROR_MSG_RESET = "ERROR_MSG_RESET";
export {
  // CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_PRODUCTS_FAILURE,
  INCREMENT,
  SET_FILTERS,
  TURN_ON_PRELOADER,
  GET_PRODUCTS,
  GET_PRODUCT_ID_FAILURE,
  GET_PRODUCT_ID,
  SUCCESS_SENDED_FEEDBACK,
  ERROR_FEEDBACK,
  DECREMENT,
  UPDATE_BUCKET,
  ADD_TO_BUCKET,
  DELETE_ITEM,
  GET_FEEDBACK_ITEMS,
  PRODUCT_ID_PRELOADER,
  RESET_FILTERS,
  SOCIALS_LOGIN_SUCCESS,
  RESET_STORE_BY_ID,
  RESET_STORE_ALL_PRODUCTS,
  EMPTY_PRODUCT_LIST,
  ERROR_MSG,
  ERROR_MSG_RESET
};
