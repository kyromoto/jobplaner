module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Job', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            validate : {
                notNull: true,
                notEmpty: true,
                isUUID: 4
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    });
}