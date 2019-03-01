const Router = require('express').Router()
const controller = require('../controllers/Staff.controller')

Router.route('/staff')
  .get(controller.getAllStaffs)
  .post(controller.createStaff)

Router.route('/staff/:id')
  .get(controller.getStaffById)
  .put(controller.updateStaffById)
  .delete(controller.deleteStaffById)

module.exports = Router