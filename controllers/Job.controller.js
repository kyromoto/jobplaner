const { check, validationResult } = require('express-validator/check');
const {Job, Staff} = require('./../models');



exports.getAllJobs = (req, res) => {
    Job.findAll({
        include: [{
            model: Staff, attributes: ['name'], through: { attributes: []}
        }]
    })
    .then(jobs => jobs.array.forEach(element => console.log(element.toJSON())))
    .then(jobs => res.status(200).json(jobs))    
    .catch(err => res.status(500).json(err))
    .catch(err => console.error("Error while getAllJobs: \n%s", err));
}

exports.createJob = (req, res) => {
    Job.create(req.body)
        .then(job => res.status(200).json(job))
        .catch(err => res.status(500).json(err));
}

exports.getJobByUUID = (req, res) => {
    Job.findById(req.params.id, args)
        .then(job => res.status(200).json(job))
        .catch(err => res.status(500).send(err));
}

exports.updateJobByUUID = (req, res) => {

}

exports.deleteJobByUUID = (req, res) => {

}