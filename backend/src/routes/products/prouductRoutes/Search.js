const api = require("../../../services/api");

const Search = (req, res) => {
  const { category } = req.params;
  const { title, sort } = req.body;
  const titlePattern = RegExp(title);

  api
    .SearchProducts(category, titlePattern, sort)
    .then(({ totalCount, product }) =>
      res.send({ status: "OK", totalCount: totalCount, product: product })
    )
    .catch(err => res.send({ status: "Error", Error: err.message }));
};

module.exports = Search;
