const express = require("express");
const productRouter = express.Router();
const getProducts = require("./prouductRoutes/getProducts");
const getProductsById = require("./prouductRoutes/getProductByID");
const getfilteredproducts = require("./prouductRoutes/getfilteredproducts");

productRouter
  .get("/:category", getProducts)
  .get("/:category/:id", getProductsById)
  .post("/:category", getfilteredproducts);

module.exports = productRouter;
