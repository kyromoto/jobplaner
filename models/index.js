const Sequelize = require('sequelize');

const conf = {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    db : process.env.DB_NAME
}

const sequelize = new Sequelize(conf.db, conf.user, conf.password, {
    host: conf.host,
    port: conf.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Job = require('./Job.model')(sequelize, Sequelize);
const Staff = require('./Staff.model')(sequelize, Sequelize);

Job.belongsToMany(Staff, { through: 'JobStaff'});
Staff.belongsToMany(Job, { through: 'JobStaff'});

sequelize
    .sync({force : false})
    .then(() => console.log("Database and Tables created."))
    .catch(err => console.error(err));

module.exports = {
    Job,
    Staff
}
