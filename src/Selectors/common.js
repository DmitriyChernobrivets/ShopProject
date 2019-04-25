const getUser = state => state.auth.currentUser;
const getSignupStatus = state => state.auth.Signnup;

const getTotalPrice = state => state.bucket.total;
const getBucketItems = state => state.bucket.items;

const getProductById = state => state.currentProductInfo;

const getAuthStatus = state => state.auth.currentUser.status;
const getFeedbacks = state => state.feedback.items;
const getFeedbackError = state => state.feedback.error;

const getSort = state => state.currentFilters.sort;
const getCurrentFilters = state => state.currentFilters;
const getAllProducts = state => state.allProducts;
const getTotalPageCount = state => state.currentFilters.totalPageCount;

const getAllProductPreload = state => state.allProducts.preloader;
const getIdProductPreload = state => state.currentProductInfo.loading;

const getGlobalError = state => state.error;
export {
  getGlobalError,
  getAllProductPreload,
  getIdProductPreload,
  getCurrentFilters,
  getAllProducts,
  getTotalPageCount,
  getUser,
  getSignupStatus,
  getBucketItems,
  getTotalPrice,
  getProductById,
  getAuthStatus,
  getFeedbacks,
  getFeedbackError,
  getSort
};
