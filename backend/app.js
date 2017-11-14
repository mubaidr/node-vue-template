const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const finale = require('finale-rest')

const routes = require('./routes/index')
const app = express()
const { models, sequelize } = require('./db/index')

// Setup DB and store models in app
app.set('db', models)

// some middlewares
if (app.get('env') === 'development') {
  app.use(logger('dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

// Setup rest api
finale.initialize({
  app: app,
  sequelize: sequelize
})

Object.keys(models).forEach(model => {
  finale.resource({
    model: models[model],
    endpoints: [`/api/${model}`, `/api/${model}/:id`]
  })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// eslint-disable-next-line
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.send(err.status || 500)
})

module.exports = app
