const Router = require('express').Router()
const controller = require('../controllers/Job.controller')

Router.route('/job')
  .get(controller.getAllJobs)
  .post(controller.createJob)

Router.route('/job/:id')
  .get(controller.getJobByUUID)
  .put(controller.updateJobByUUID)
  .delete(controller.deleteJobByUUID)

module.exports = Router
