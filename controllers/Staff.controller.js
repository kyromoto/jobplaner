const httpStatus = require('http-status-codes');
const {Job, Staff} = require('./../models');

exports.getAllStaffs = (req, res) => {
    Staff.findAll()
        .then(staffs => res.status(httpStatus.OK).json(staffs))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).err())
        .catch(err => console.error(err));
}

exports.createStaff = (req, res) => {
    Staff.create(req.body)
        .then(staff => res.json(staff))
        .catch(err => console.error(err));
}

exports.getStaffById = (req, res) => {
    Staff.findById(req.params.staffId)
        .then(staff => res.json(staff))
        .catch(err => console.error(err))
        .catch(err => res.status(500).json(err));
}

exports.updateStaffById = (req, res) => {

}

exports.deleteStaffById = (req, res) => {

}