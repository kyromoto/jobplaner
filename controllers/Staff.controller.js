exports.getAllStaffs = (req, res) => {
  const Models = req.app.get('models')
  Models.Staff.findAll({})
    .then(staffs => res.json(staffs))
    .catch(err => { throw new Error(err) })
}

exports.createStaff = (req, res) => {
  const Models = req.app.get('models')
  Models.Staff.create(req.body)
    .then(staff => res.json(staff))
    .catch(err => { throw new Error(err) })
}

exports.getStaffById = (req, res) => {
  const Models = req.app.get('models')
  Models.Staff.findById(req.params.staffId)
    .then(staff => res.json(staff))
    .catch(err => { throw new Error(err) })
}

exports.updateStaffById = (req, res) => {
  throw new Error('NOT IMPLEMENTED');
}

exports.deleteStaffById = (req, res) => {
  throw new Error('NOT IMPLEMENTED');
}
