module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Staff', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      validation: {
        notEmpty: true,
        isUUID: 4
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validation: {
        notEmpty: true
      }
    }
  })
}
