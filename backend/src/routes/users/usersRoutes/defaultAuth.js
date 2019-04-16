const jwt = require("jsonwebtoken");
const api = require("../../../services/api");
const app = require("../../../module/bootstrap-express");

const generateToken = payload => {
  const secretKey = app.get("superSecret");

  return jwt.sign(payload, secretKey, {
    expiresIn: "7d"
  });
};

const auth = (req, res) => {
  const token = req.headers["authorization"];

  const tokendata = jwt.decode(token);

  if (!token || jwt.decode(token).guest) {
    const newtoken = generateToken({ guest: "guest" });

    res.send({
      status: "Guest",
      token: newtoken
    });
  } else {
    const { id } = tokendata;

    api
      .findUserID(id)
      .then(onSuccess)
      .catch(err => res.send({ status: "Failed", Error: err.message }));

    function onSuccess(user) {
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
  }
};

module.exports = auth;
