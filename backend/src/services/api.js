const Model = require("../mongoDB/models/Model");

const sortvalue = query => {
  if (query === "cheap") {
    return { price: 1 };
  } else if (query === "exp") {
    return { price: -1 };
  } else return;
};

const api = {
  getProducts: collection => Model[collection].find(),
  getProductByID: (collection, id) => Model[collection].findById(id),
  getfilteredProducts: (collection, queryObj, sort, page = 0, limit = 6) =>
    Model[collection]
      .find(queryObj)
      .skip(page * limit)
      .limit(limit)
      .sort(sortvalue(sort)),

  getFeedacks: (collection, id) => Model[collection].find({ product_ID: id }),
  postFeedback: (collection, obj) => Model[collection].create(obj)
};

module.exports = api;
