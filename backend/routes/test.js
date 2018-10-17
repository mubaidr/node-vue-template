const express = require('express')

const router = express.Router({ caseSensitive: true })

router.get('/routes', (req, res, next) => {
  const table = []
  const routes = req.app._router.stack

  for (const key in routes) {
    if (routes.hasOwnProperty(key)) {
      let val = routes[key]
      if (val.route) {
        val = val.route
        table.push(`${val.stack[0].method  } : ${  val.path}`)
      }
    }
  }
  res.json(table)
})

router.get('/', (req, res, next) => {
  res.send('test')
})

router.post('/', (req, res, next) => {
  res.send(`test: ${  req.body}`)
})

module.exports = router
