const User = require("../mongoDB/models/Users");

const validateUser = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then(el => (el ? res.send({ status: "Exists", error: "User already exists" }) : next()))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};

module.exports = validateUser;
