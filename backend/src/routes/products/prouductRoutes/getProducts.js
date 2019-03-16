const api = require("../../../services/api");

const getProducts = (req, res) => {
  const { category } = req.params;

  // console.log(searchObj);

  api
    .getProducts(category)
    .then(el => res.send({ status: "OK", products: el }))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};
module.exports = getProducts;
