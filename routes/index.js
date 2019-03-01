const Router = require('express').Router()
const { ErrorLogger, SequelizeValidationErrorHandler } = require('./../controllers/ErrorHandlers.middleware')

Router.use(require('./Job.route'))
Router.use(require('./Staff.route'))

Router.use(ErrorLogger)
Router.use(SequelizeValidationErrorHandler)

module.exports = Router