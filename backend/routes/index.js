const express = require('express')

const router = express.Router({ caseSensitive: true })

// import route segments
const test = require('./test')
const authentication = require('./authentication')
const custom = require('./custom')

// register routes
router.use('/test', test)
router.use(authentication)
router.use(custom)

module.exports = router
