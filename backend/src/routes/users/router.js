const express = require("express");
const userRouter = express.Router();
const createUser = require("./usersRoutes/createUser");
const updateUser = require("./usersRoutes/updateUser");
const validateUser = require("../../middleware/validateUser");
const login = require("./usersRoutes/login");
const defaultAuth = require("./usersRoutes/defaultAuth");

userRouter
  .get("/auth", defaultAuth)
  .post("/auth/login", login)
  .post("/create", validateUser, createUser)
  .put("/:id", updateUser);

module.exports = userRouter;
