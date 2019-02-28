import { combineReducers } from "redux";
import getProductsReducer from "./getProductsReducer";
import categoriesReducer from "./categoriesReducer";
import getProductByIdReducer from "./getProductByIdReducer";

const rootReducer = combineReducers({
  allProducts: getProductsReducer,
  currentProductInfo: getProductByIdReducer,
  categories: categoriesReducer
});

export default rootReducer;
