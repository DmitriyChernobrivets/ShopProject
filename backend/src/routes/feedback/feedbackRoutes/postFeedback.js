const Feedback = require("../../../mongoDB/models/Feedback");

const postFeedback = (req, res) => {
  const { body } = req;

  Feedback.create(body)
    .then(el => res.send({ status: "OK" }))
    .catch(err => res.send({ status: "Error", Error: err.message }));
};

module.exports = postFeedback;
