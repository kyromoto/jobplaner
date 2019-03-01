require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const { DBConfig, SequelizeConfig, isProductionMode } = require('./models/config')

const PORT = process.env.SERVER_PORT || null

const sequelize = new Sequelize(DBConfig.db, DBConfig.user, DBConfig.password, SequelizeConfig)
const Models = require('./models')(sequelize, Sequelize)

const app = express()
const httpServer = http.createServer(app)

httpServer.on('error', async (err) => {
  console.error('HTTP-Server error: \n%s', err)
  try {
    await sequelize.close()
    console.log('DB connection closed.')
  }
  catch (err) { console.error('Error while closing DB connection: \n%s', err) }
})

httpServer.on('listening', () => {
  console.log('HTTP-Server is listening on port %s', PORT)
  app.emit('app-is-ready')
})

app.on('app-is-ready', () => console.log('App is ready.'))

app.set('models', Models)

app.use(bodyParser.json())
app.use('/', require('./routes'))

sequelize.sync({ force: !isProductionMode() })
  .then(() => console.log('Database and Tables created.'))
  .then(() => httpServer.listen(PORT))
  .catch(err => { throw new Error(err) })

module.exports = app