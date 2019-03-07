const mongoose = require("mongoose");

const getByID = (req, res) => {
  const { id, category } = req.params;
  console.log(id, category);
  mongoose
    .model(category)
    .findById(id)
    .then(el => res.send({ status: "OK", product: el }))
    .catch(err => res.send({ status: "Error", Error: err.message }));

  // mongoose
  //   .model(category)
  //   .findById(id)
  //   .then(product => res.send({ status: "OK", product }))
  //   .catch(err => res.send({ status: "Failed", Error: err.message }));
};
module.exports = getByID;
