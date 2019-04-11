const express = require("express");
const userRouter = express.Router();
const createUser = require("./usersRoutes/createUser");
const updateUser = require("./usersRoutes/updateUser");
const validateUser = require("../../middleware/validateUser");
const login = require("./usersRoutes/login");
const defaultAuth = require("./usersRoutes/defaultAuth");
// const passport = require("passport");

userRouter
  .get("/auth", defaultAuth)
  .post("/auth/login", login)
  .post("/create", validateUser, createUser)
  .put("/:id", updateUser);
// .get("/google", passport.authenticate("google", { scope: ["profile"] }))
// .get("/google/callback", passport.authenticate("google"), (req, res) => {
//   res.send("xaxaxa");
// });

module.exports = userRouter;
