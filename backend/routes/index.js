const express = require('express')
const router = express.Router()

// import route segments
const test = require('./test')
const auth = require('./auth')

// register routes
router.use('/test', test)
router.use('/', auth)

module.exports = router
