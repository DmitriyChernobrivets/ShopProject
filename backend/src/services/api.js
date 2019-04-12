const Model = require("../mongoDB/Model");
const { sort_by } = require("./helpers");

const api = {
  getProductByID: (collection, id) => Model[collection].findById(id),

  getProducts: async (collection, queryObj, sort = "", page = 0, limit = 6) => {
    const sortValue = sort_by(sort);

    const items = await Model[collection]
      .find(queryObj)
      .skip(page * limit)
      .limit(limit)
      .sort(sortValue);

    const count = await Model[collection].find(queryObj).count();
    return { product: items, totalCount: count };
  },
  SearchProducts: async (collection, title, sort) => {
    const sortValue = sort_by(sort);
    const items = await Model[collection].find({ title }).sort(sortValue);
    const count = await Model[collection].find({ title }).count();
    return { product: items, totalCount: count };
  },

  findUserID: id => Model["User"].findById(id),
  findLogedUser: query => Model["User"].findOne(query),
  createUser: (user, hashedPassword) => {
    const newUser = new Model["User"]({ ...user, password: hashedPassword });
    return newUser.save();
  },

  getFeedacks: (collection, id) => Model[collection].find({ product_ID: id }),
  postFeedback: (collection, obj) => Model[collection].create(obj)
};

module.exports = api;
