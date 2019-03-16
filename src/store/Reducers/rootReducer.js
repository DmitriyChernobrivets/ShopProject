import { combineReducers } from "redux";
import getProductsReducer from "./getProductsReducer";
import categoriesReducer from "./categoriesReducer";
import getProductByIdReducer from "./getProductByIdReducer";
import bucketReducer from "./bucketReducer";
import filterReducer from "./filtersReducer";

const rootReducer = combineReducers({
  allProducts: getProductsReducer,
  currentProductInfo: getProductByIdReducer,
  categories: categoriesReducer,
  bucket: bucketReducer,
  currentFilters: filterReducer
});

export default rootReducer;
