const Sequelize = require('sequelize')
const config = require('config')

const sequelize = new Sequelize(config.get('db.name'), config.get('db.username'), config.get('db.password'), {
  host: config.get('db.host'),
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize
