const mongoose = require("mongoose");
const Feedback = require("../../../mongoDB/models/Feedback");

const getFeedback = (req, res) => {
  const { id } = req.query;
  Feedback.find({ product_ID: id })
    .sort({ created: 1 })
    .then(el => res.send({ statuse: "OK", feedback: el }))
    .catch(err => res.send({ statuse: "Failed", Error: err.message }));
};

module.exports = getFeedback;
