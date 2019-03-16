const { transformQuery } = require("../../../services/helpers");
const api = require("../../../services/api");

const getfilteredproducts = (req, res) => {
  const { category } = req.params;
  const { sort, currentPage, ...searchQuery } = req.body;

  const searchObj = transformQuery(searchQuery);

  api
    .getfilteredProducts(category, searchObj, sort, currentPage)
    .then(el => res.send({ status: "OK", products: el }))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};

module.exports = getfilteredproducts;
