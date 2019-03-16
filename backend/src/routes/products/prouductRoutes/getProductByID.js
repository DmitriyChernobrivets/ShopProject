const api = require("../../../services/api");

const getByID = (req, res) => {
  const { id, category } = req.params;

  api
    .getProductByID(category, id)
    .then(el => res.send({ status: "OK", product: el }))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};
module.exports = getByID;
