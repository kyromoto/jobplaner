module.exports = (sequelize, DataTypes) => {
  const Models = {
    Job: require('./Job.model')(sequelize, DataTypes),
    Staff: require('./Staff.model')(sequelize, DataTypes)
  }

  Models.Job.belongsToMany(Models.Staff, { through: 'JobStaff' })
  Models.Staff.belongsToMany(Models.Job, { through: 'JobStaff' })

  return Models;
}
