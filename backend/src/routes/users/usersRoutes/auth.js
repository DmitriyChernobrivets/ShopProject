const User = require("../../../mongoDB/models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = require("../../../module/bootstrap-express");

const comparePaswords = (checkingPW, hash) => bcrypt.compareSync(checkingPW, hash);
const generateToken = payload => {
  const secretKey = app.get("superSecret");

  return jwt.sign(payload, secretKey, {
    expiresIn: "7d"
  });
};

const auth = (req, res) => {
  const { id, password } = req.body;
  User.findById(id)
    .then(onSuccess)
    .catch(err => res.send({ status: "Failed", Error: err.message }));

  function onSuccess(user) {
    if (!comparePaswords(password, user.password)) {
      return res.send({ status: "Failed", Error: "password doesn't match" });
    }

    const payload = {
      userPassword: password
    };

    const token = generateToken(payload);

    res.json({
      status: "Success",
      token: token
    });
  }
};

module.exports = auth;
