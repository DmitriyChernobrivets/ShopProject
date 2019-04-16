const { transformQuery } = require("../../../services/helpers");
const api = require("../../../services/api");

const getProducts = (req, res) => {
  const { category } = req.params;

  const { sort, currentPage, totalPageCount, ...searchQuery } = req.body;
  const searchObj = transformQuery(searchQuery);

  api
    .getProducts(category, searchObj, sort, currentPage)

    .then(({ totalCount, product }) =>
      res.send({ status: "OK", totalCount: totalCount, product: product })
    )
    .catch(err => console.log(err) || res.send({ status: "Error", Error: err.message }));
};

module.exports = getProducts;
