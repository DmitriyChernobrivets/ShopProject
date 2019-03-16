const api = require("../../../services/api");

const postFeedback = (req, res) => {
  const { body } = req;

  api
    .postFeedback("Feedback", body)
    .then(el => res.send({ status: "OK" }))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};

module.exports = postFeedback;
