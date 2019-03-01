const httpStatus = require('http-status-codes')
const Sequelize = require('sequelize');

exports.ErrorLogger = (err, req, res, next) => {
  console.error('Uuuuups, da ist was schief gegangen: \n%s', err instanceof Object ? JSON.stringify(err, null, 2) : err)
  next(err)
}

exports.SequelizeValidationErrorHandler = (err, req, res, next) => {
  if(err instanceof Object) {
    if(err.name === 'SequelizeValidationError') {
      res.status(httpStatus.BAD_REQUEST).json(err);
    }
  } else if(err instanceof String) {
    if(err === httpStatus.METHOD_NOT_ALLOWED) {
      res.status(httpStatus.METHOD_NOT_ALLOWED).json()
    }
  }
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json();
}