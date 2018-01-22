const Sequelize = require('sequelize')
const config = require('config')
const fs = require('fs')
const path = require('path')

const seeder = require('./seeder')
const associations = require('./associations')

const directory = path.join(__dirname, '/models/')

const models = {}

// Setup sequelize
const sequelize = new Sequelize(
  config.get('options.db.name'),
  config.get('options.db.username'),
  config.get('options.db.password'),
  {
    host: config.get('options.db.host'),
    dialect: 'mssql',
    freezeTableName: true,
    operatorsAliases: false,
    timestamps: true,
    underscored: true,
    pool: {
      maxConnections: 5,
      maxIdleTime: 30
    },
    define: {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      underscored: false,
      freezeTableName: true
    },
    typeValidation: true,
    benchmark: false,
    logging: false,
    syncOnAssociation: false
  }
)

// Import models
fs.readdirSync(directory).forEach(file => {
  const name = file.replace('.js', '')
  models[name] = sequelize.import(directory + file)
})

// Setup model associations
associations.associate(models)

// Test connection
sequelize
  .authenticate()
  .then(() => {
    // Sync DB schema
    sequelize
      .sync({
        logging: false
      })
      .then(() => {
        seeder.seed(models, () => {
          console.log('[sequelize] database synced\n')
        })
      })
      .catch(err => {
        console.log(`\n${err.message}\n${err.stack}\n`)
      })
  })
  .catch(err => {
    console.log(`\n${err.message}\n${err.stack}\n`)
  })

module.exports = {
  models,
  sequelize
}
