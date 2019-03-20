import { combineReducers } from "redux";
import getProductsReducer from "./getProductsReducer";
import categoriesReducer from "./categoriesReducer";
import getProductByIdReducer from "./getProductByIdReducer";
import bucketReducer from "./bucketReducer";
import filterReducer from "./filtersReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  allProducts: getProductsReducer,
  currentProductInfo: getProductByIdReducer,
  categories: categoriesReducer,
  bucket: bucketReducer,
  currentFilters: filterReducer,
  auth: userReducer
});

export default rootReducer;
