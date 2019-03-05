import { combineReducers } from "redux";
import getProductsReducer from "./getProductsReducer";
import categoriesReducer from "./categoriesReducer";
import getProductByIdReducer from "./getProductByIdReducer";
import bucketReducer from "./bucketReducer";

const rootReducer = combineReducers({
  allProducts: getProductsReducer,
  currentProductInfo: getProductByIdReducer,
  categories: categoriesReducer,
  bucket: bucketReducer
});

export default rootReducer;
