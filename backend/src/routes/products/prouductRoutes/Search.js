const api = require("../../../services/api");

const Search = (req, res) => {
  console.log("xaxa");
  const { category } = req.params;
  const { title, sort } = req.body;
  const titlePattern = RegExp(title);

  api
    .SearchProducts(category, titlePattern, sort)
    .then(({ totalCount, product }) =>
      res.send({ status: "OK", totalCount: totalCount, product: product })
    )
    .catch(err => res.send({ status: "Failed", Error: err.message }));
};

module.exports = Search;
