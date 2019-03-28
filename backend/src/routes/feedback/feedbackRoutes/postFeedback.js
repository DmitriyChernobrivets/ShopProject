const api = require("../../../services/api");

const postFeedback = (req, res) => {
  const { body } = req;
  console.log(body);
  api
    .postFeedback("Feedback", body)
    .then(el => console.log(el) || res.send({ status: "OK" }))
    .catch(err => console.log(err) || res.send({ status: "Error", Error: err.message }));
};

module.exports = postFeedback;
