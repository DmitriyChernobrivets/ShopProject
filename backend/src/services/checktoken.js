const jwt = require("jsonwebtoken");
const app = require("../module/bootstrap-express");

const gettoken = req => req.body.token || req.query.token || req.headers["x-access-token"];

const checktoken = (req, res, next) => {
  const token = gettoken(req);
  const secretKey = app.get("superSecret");

  if (!token) {
    return res.status(403).send({
      status: "Failed",
      Error: "No token found"
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.json({
        status: "Failed",
        Error: "failed to verify token"
      });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = checktoken;
