const express = require('express')

const router = express.Router({ caseSensitive: true })

router.get('/', (req, res, next) => {
  res.send('Home')
})

module.exports = router
