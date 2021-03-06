const app = require("../module/bootstrap-express");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const notebookRouter = require("../routes/products/router");
const userRouter = require("../routes/users/router");
const errorHandler = require("../middleware/errorHandler");
const feedbackRouter = require("../routes/feedback/router");
const morgan = require("morgan");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require("mongoose");
const { mongoURI, SECRET } = require("../config/config");
// const checktoken = require("../services/checktoken");
const cors = require("cors");

const server = port => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(db => console.log("Mongo connected!"))
    .catch(err => console.log("Error in Mongo Server!", err.message));

  app
    .set("superSecret", SECRET)
    .use(urlencodedParser)
    .use(bodyParser.json())
    .use(morgan("dev"))

    .use(express.static(path.join(__dirname, "../", "public")))

    .use(cors())

    .use("/users", userRouter);

  app
    .use("/category", notebookRouter)
    // .use(checktoken)

    .use("/feedback", feedbackRouter)
    .get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../", "public/", "index.html"));
    })
    .use(errorHandler)
    .listen(port, () => console.log(`listening port ${port}`));
};

module.exports = server;
