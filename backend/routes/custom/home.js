const express = require('express')
const router = express.Router({ caseSensitive: true })

//TODO: home for news
router.get('/', (req, res, next) => {
  res.send('Home')
})

module.exports = router
