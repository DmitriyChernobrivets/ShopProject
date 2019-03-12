const mongoose = require("mongoose");

const MODELS = require("../../../mongoDB/models/Model");
const getProducts = (req, res) => {
  const { category } = req.params;

  const obj = Object.keys(req.query).reduce((acc, el) => {
    const a = req.query[el].split(",").map(el => RegExp(el));
    if (el === "memory") {
      acc["description.memory"] = a;
      return acc;
    } else {
      acc[el] = a;
      return acc;
    }
  }, {});

  MODELS[category]
    .find(obj)
    .then(el => res.send({ status: "OK", products: el }))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};
module.exports = getProducts;
