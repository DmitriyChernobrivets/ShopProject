const { transformQuery } = require("../../../services/helpers");
const api = require("../../../services/api");

const getProducts = (req, res) => {
  const { category } = req.params;
  const { query } = req;
  // const { sort, currentPage, totalPageCount, ...searchQuery } = req.body;

  const searchObj = transformQuery(query);

  console.log(searchObj);
  api
    // .getProducts(category, searchObj, sort, currentPage)
    .getProducts(category, searchObj)

    .then(
      ({ totalCount, products }) =>
        console.log(totalCount) ||
        res.send({ status: "OK", totalCount: totalCount, product: products })
    )
    .catch(err => console.log(err) || res.send({ status: "Failed", Error: err.message }));
};

module.exports = getProducts;
