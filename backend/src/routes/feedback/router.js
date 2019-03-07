const feedbackRouter = require("express").Router();
const postFeedback = require("./feedbackRoutes/postFeedback");
const getFeedback = require("./feedbackRoutes/getFeedback");

feedbackRouter.post("/", postFeedback).get("/", getFeedback);

module.exports = feedbackRouter;
