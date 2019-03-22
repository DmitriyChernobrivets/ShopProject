// const User = require("../../../mongoDB/models/Users");
const api = require("../../../services/api");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const user = req.body;

  const hashedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);

  api
    .createUser(user, hashedPassword)
    .then(({ firstName, lastName, password, id }) =>
      res.send({ status: "OK", newUser: { firstName, lastName, password, id } })
    )
    .catch(err => res.send({ status: "Failed", error: err.message }));
};

module.exports = createUser;
