const express = require("express");

const bodyParser = require("body-parser");

const notebookRouter = require("../routes/products/router");
const userRouter = require("../routes/users/router");
const errorHandler = require("../middleware/errorHandler");
const feedbackRouter = require("../routes/feedback/router");
const morgan = require("morgan");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const mongoose = require("mongoose");
const { mongoURI } = require("../config/config");
const app = express();

const server = port => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(db => console.log("Mongo connected"))
    .catch(err => console.log("Error with Mongo", err));

  app
    .use(urlencodedParser)
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use(express.static("./src/public"))
    .use("/category", notebookRouter)
    .use("/users", userRouter)
    .use("/feedback", feedbackRouter)

    .use(errorHandler)
    .listen(port, () => console.log("listening port 3003"));
};

module.exports = server;
