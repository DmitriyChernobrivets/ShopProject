const api = require("../../../services/api");

const getFeedback = (req, res) => {
  const { id } = req.query;

  api
    .getFeedacks("Feedback", id)
    .sort({ created: 1 })
    .then(el => res.send({ statuse: "OK", feedback: el }))
    .catch(err => res.send({ statuse: "Failed", error: err.message }));
};

module.exports = getFeedback;
