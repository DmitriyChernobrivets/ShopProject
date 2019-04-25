const api = require("../services/api");

const validateUser = (req, res, next) => {
  const { email } = req.body;

  api
    .findLogedUser({ email })
    .then(el => {
      el ? res.send({ status: "Exists", Error: "User already exists" }) : next();
    })
    .catch(err => res.send({ status: "Failed", Error: err.message }));
};

module.exports = validateUser;
