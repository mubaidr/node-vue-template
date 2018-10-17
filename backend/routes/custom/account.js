const express = require('express')

const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const validator = require('validator')

router.post('/', (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']
  const db = req.app.get('db')
  let { email, password } = req.body
  const user = req.account
  let updateOptions

  if (email && validator.isEmail(email)) {
    updateOptions = {
      email: validator.normalizeEmail(email),
      isConfirmed: false
    }
  } else if (
    password &&
    validator.isLength(password, {
      min: 8,
      max: 16
    })
  ) {
    password = bcrypt.hashSync(password, 8)
    updateOptions = { password }
  } else {
    res.sendStatus(400)
    return
  }

  db.login
    .update(updateOptions, {
      where: {
        id: user.id
      }
    })
    .then(() => {
      // return updated user details
      user.email = email
      user.isConfirmed = false

      // Update client side info
      res.json({
        token,
        login: user
      })
    })
    .catch(next)
})

module.exports = router
