const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = require("../../../module/bootstrap-express");
const api = require("../../../services/api");
const comparePaswords = (checkingPW, hash) => bcrypt.compareSync(checkingPW, hash);
const generateToken = payload => {
  const secretKey = app.get("superSecret");

  return jwt.sign(payload, secretKey, {
    expiresIn: "7d"
  });
};

const auth = (req, res) => {
  const { email, password } = req.body;

  api
    .findLogedUser({ email })
    .then(onSuccess)
    .catch(err => console.log(err.message) || res.send({ status: "Failed", Error: err.message }));

  function onSuccess(user) {
    if (!comparePaswords(password, user.password)) {
      return res.send({ status: "Failed", Error: "password doesn't match" });
    }

    const payload = {
      email: user.email,
      id: user._id
    };

    const token = generateToken(payload);
    console.log(token);
    res.json({
      status: "User",
      user,
      token: token
    });
  }
};

module.exports = auth;