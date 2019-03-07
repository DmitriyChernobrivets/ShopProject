const ErrorHandler = (err, req, res, next) => {
  if (err) res.send({ status: "Server Error", Error: err.name });
  else next();
};

module.exports = ErrorHandler;
