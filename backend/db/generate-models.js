/**
 * Generates models from the given DB in to models directory
 */
const Sequelize = require('sequelize')
const SequelizeAuto = require('sequelize-auto')
const config = require('config')
const fs = require('fs')
const path = require('path')

const directory = path.join(__dirname, 'models')
// enable support for timestamps
const enableTimestamps = true

const auto = new SequelizeAuto(
  config.get('options.db.name'),
  config.get('options.db.username'),
  config.get('options.db.password'),
  {
    host: config.get('options.db.host'),
    dialect: 'mssql',
    directory: directory,
    additional: {
      timestamps: enableTimestamps,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
    },
    logging: false
  }
)

console.log('\nGenerating models in: ' + directory)
auto.run(err => {
  if (err) throw err

  console.log('\nRemoving redundant models (views, sysdiagrams, aspnet, __MigrationHistory)')
  fs.readdirSync(directory).forEach(file => {
    const t_file = file.toLowerCase()
    if (
      t_file[0] === 'V'.toLowerCase() ||
      t_file.includes('AspNet'.toLowerCase()) ||
      t_file.includes('sysdiagrams'.toLowerCase()) ||
      t_file.includes('__MigrationHistory'.toLowerCase())
    ) {
      fs.unlinkSync(path.join(directory, file))
    }
  })

  if (enableTimestamps) {
    console.log('\nEnabling timestamp support for database')

    setupTimestamps(() => {
      console.info('\nTask succesfully completed.')
    })
  } else {
    console.info('\nTask succesfully completed.')
  }
})

function setupTimestamps (callback) {
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
      logging: false
    }
  )

  // Add timestamps comlumns to all tables
  sequelize
    .query(
      `
    SET QUOTED_IDENTIFIER OFF;

    exec sp_msforeachtable

    "
    IF NOT EXISTS(
        SELECT *
        FROM   sys.columns
        WHERE  object_id = OBJECT_ID(N'?') AND ( name = 'created_at' OR name = 'updated_at' )
    )
    BEGIN
      alter table ? add
      CREATED_AT datetime not null default getdate(),
      UPDATED_AT datetime not null default getdate();
    END
    "

    SET QUOTED_IDENTIFIER ON;
    `
    )
    .catch(err => {
      console.error(err)
    })
    .then(() => {
      sequelize.close()
      if (callback) {
        callback()
      }
    })
}
