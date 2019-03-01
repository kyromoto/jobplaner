const isProductionMode = () => process.env.NODE_ENV === 'production'

const DBConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  db: process.env.DB_NAME
}

const SequelizeConfig = {
  host: DBConfig.host,
  port: DBConfig.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: !isProductionMode()
}

module.exports = {
  DBConfig,
  SequelizeConfig,
  isProductionMode
}