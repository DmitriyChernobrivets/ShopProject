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
  const token = req.headers["x-access-token"];
  const tokendata = jwt.decode(token);

  if (token === "GUEST" || jwt.decode(token).guest) {
    const payload = { guest: "guest" };
    const token = generateToken(payload);
    res.send({
      status: "Guest",
      token: token
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
