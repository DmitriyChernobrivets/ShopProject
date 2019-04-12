const express = require("express");
const productRouter = express.Router();
const getProducts = require("./prouductRoutes/getProducts");
const Search = require("./prouductRoutes/Search");
const getProductsById = require("./prouductRoutes/getProductByID");

productRouter
  .post("/:category", getProducts)
  .get("/:category/:id", getProductsById)
  .post("/:category/search", Search);

module.exports = productRouter;
