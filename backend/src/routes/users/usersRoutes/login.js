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
  // const token = req.headers["x-access-token"];
  // if (!token) {
  //   const payload = { guest: "guest" };
  //   const token = generateToken(payload);
  //   res.send({
  //     status: "Guest",
  //     token: token
  //   });
  // } else {
  // const tokendata = jwt.decode(token);

  const { email, password } = req.body;

  User.findOne({ email })
    .then(onSuccess)
    .catch(err => res.send({ status: "Failed", Error: err.message }));

  function onSuccess(user) {
    if (!comparePaswords(password, user.password)) {
      return res.send({ status: "Failed", Error: "password doesn't match" });
    }

    const payload = {
      email: user.email,
      id: user._id
    };

    const token = generateToken(payload);

    res.json({
      status: "User",
      user,
      token: token
    });
  }
};

module.exports = auth;
