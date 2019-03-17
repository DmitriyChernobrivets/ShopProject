const express = require("express");
const productRouter = express.Router();
const getProducts = require("./prouductRoutes/getProducts");

const getProductsById = require("./prouductRoutes/getProductByID");

productRouter.post("/:category", getProducts).get("/:category/:id", getProductsById);

module.exports = productRouter;
