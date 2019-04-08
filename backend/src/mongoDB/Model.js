const NoteBooksModel = require("./models/Notebooks");
const Feedback = require("./models/Feedback");
const User = require("./models/Users");
const Mobile = require("./models/Mobile");
const PCs = require("./models/PCs");
module.exports = {
  Notebooks: NoteBooksModel,
  Feedback: Feedback,
  User: User,
  Mobile: Mobile,
  PCs: PCs
};
