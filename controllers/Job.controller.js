const httpStatus = require('http-status-codes')
const Sequelize = require('sequelize');

exports.getAllJobs = async (req, res, next) => {
  const Models = req.app.get('models')
  const ARGS = {
    include: [{
      model: Models.Staff, attributes: ['name'], through: { attributes: [] }
    }]
  }
  try {
    let jobs = await Models.Job.findAll(ARGS)
    res.status(httpStatus.OK).json(jobs)
  } catch (err) {
    next(err)
  }
}

exports.createJob = async (req, res, next) => {
  const Models = req.app.get('models')
  try {
    let job = await Models.Job.create(req.body)
    res.status(httpStatus.CREATED).json(job)
  }
  catch (err) {
    return next(err)
  }
}

exports.getJobByUUID = async (req, res, next) => {
  const Models = req.app.get('models')
  const ARGS = {
    include: [{
      model: Staff, attributes: ['name'], through: { attributes: [] }
    }]
  }
  try {
    let job = await Models.Job.findById(req.params.id, ARGS)
    res.status(httpStatus.OK).json(job)
  }
  catch (err) {
    return next(err)
  }
}

exports.updateJobByUUID = async (req, res, next) => {
  return next(httpStatus.METHOD_NOT_ALLOWED)
}

exports.deleteJobByUUID = async (req, res, next) => {
  return next(httpStatus.METHOD_NOT_ALLOWED)
}