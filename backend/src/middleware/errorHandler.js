const ErrorHandler = (err, req, res, next) => {
  if (err) res.send({ status: "Failed", Error: err.name });
  else next();
};

module.exports = ErrorHandler;
