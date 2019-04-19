const api = require("../../../services/api");

const postFeedback = (req, res) => {
  const { body } = req;

  api
    .postFeedback("Feedback", body)
    .then(el => console.log(el) || res.send({ status: "OK" }))
    .catch(err => console.log(err) || res.send({ status: "Failed", Error: err.message }));
};

module.exports = postFeedback;
