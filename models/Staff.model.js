module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Staff', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            validation : {
                isUUID: 4,
                notNull: true,
                notEmpty: true
            }
        },
        name : {
            type: Sequelize.STRING,
            allowNull: false,
            validation : {
                notNull: true,
                notEmpty: true
            }
        }
    });
}