const express = require('express')

const router = express.Router({ caseSensitive: true })

const home = require('./home')
const account = require('./account')

router.use('/api/home', home)
router.use('/api/account', account)

module.exports = router
