const ErrorHandler = (err, req, res, next) => {
  if (err) res.send({ status: "Failed", Error: err.message });
  else next();
};

module.exports = ErrorHandler;
