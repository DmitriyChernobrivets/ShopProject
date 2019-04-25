const getUser = state => state.auth.currentUser;
const getSignupStatus = state => state.auth.Signnup;

const getTotalPrice = state => state.bucket.total;
const getBucketItems = state => state.bucket.items;

const getProductById = state => state.currentProductInfo;

const getAuthStatus = state => state.auth.currentUser.status;
const getFeedbacks = state => state.feedback.items;
const getFeedbackError = state => state.feedback.error;

export {
  getUser,
  getSignupStatus,
  getBucketItems,
  getTotalPrice,
  getProductById,
  getAuthStatus,
  getFeedbacks,
  getFeedbackError
};
