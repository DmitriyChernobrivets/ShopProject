import { combineReducers } from "redux";
import getProducts from "./getProducts";
import categories from "./categories";
import getProductById from "./getProductById";
import bucket from "./bucket";
import filter from "./filters";
import user from "./user";
import feedback from "./feedback";
import errorHandler from "./errorHandler";

const rootReducer = combineReducers({
  allProducts: getProducts,
  auth: user,
  currentProductInfo: getProductById,
  bucket: bucket,
  currentFilters: filter,
  feedback: feedback,
  categories: categories,
  error: errorHandler
});

export default rootReducer;
