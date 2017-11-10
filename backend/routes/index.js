var express = require('express')
var router = express.Router()

// route segments
var login = require('./login')

router.use('/login', login)

module.exports = router
