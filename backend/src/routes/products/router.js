const express = require("express");
const productRouter = express.Router();
const getProducts = require("./prouductRoutes/getProducts");
const getProductsById = require("./prouductRoutes/getProductByID");
const mongoose = require("mongoose");
productRouter.get("/:category", getProducts).get("/:category/:id", getProductsById);

// productRouter.post('/', postProduct);

module.exports = productRouter;
