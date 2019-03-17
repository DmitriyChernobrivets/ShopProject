const Model = require("../mongoDB/models/Model");

const sortvalue = query => {
  if (query === "cheap") {
    return { price: 1 };
  } else if (query === "exp") {
    return { price: -1 };
  } else return;
};

const api = {
  getProductByID: (collection, id) => Model[collection].findById(id),

  getProducts: async (collection, queryObj, sort, page = 0, limit = 6) => {
    const items = await Model[collection]
      .find(queryObj)
      .skip(page * limit)
      .limit(limit)
      .sort(sortvalue(sort));
    const count = await Model[collection].find(queryObj).count();
    return { product: items, totalCount: count };
  },

  getFeedacks: (collection, id) => Model[collection].find({ product_ID: id }),
  postFeedback: (collection, obj) => Model[collection].create(obj)
};

module.exports = api;
