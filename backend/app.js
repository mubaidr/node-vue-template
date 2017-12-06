const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const finale = require('finale-rest')
const cors = require('cors')

const routes = require('./routes/index')
const app = express()
const { models, sequelize } = require('./db/index')

// Console colors
const colors = require('colors')
colors.setTheme({
  success: 'green',
  debug: 'blue',
  info: 'cyan',
  warn: 'yellow',
  error: 'red'
})

// Setup DB and store models in app
app.set('db', models)
app.set('sequelize', sequelize)
app.set('case sensitive routing', true)

// some middlewares
if (app.get('env') === 'development') {
  app.use(logger('dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', routes)

// Setup rest api
finale.initialize({
  app: app,
  sequelize: sequelize
})

let skipListModelAPI = ['admin', 'adminRole', 'login']
Object.keys(models).forEach(model => {
  if (skipListModelAPI.indexOf(model) === -1) {
    finale.resource({
      model: models[model],
      endpoints: [`/api/${model}`, `/api/${model}/:id`]
    })
  }
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('\n' + err.message.error + '\n' + err.stack.warn + '\n')
  if (req.app.get('env') === 'development') {
    res.status(err.status || 500).send(err.stack)
  } else {
    res.sendStatus(err.status || 500)
  }
})

module.exports = app
