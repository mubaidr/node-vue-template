const express = require('express')
const router = express.Router({ caseSensitive: true })
const util = require('./../db/util')

router.use('/api/:model/:id?', (req, res, next) => {
  let db = req.app.get('db')
  let account = req.account
  let method = req.method
  let id = req.params.id
  let model = req.params.model
  let object = db[model]

  if (!object) {
    return next()
  }

  if (id) {
    return next()
  } else {
    switch (method) {
      case 'GET':
        // Returned filtered data to user
        object
          .findAll({
            where: prepareWhereObject(object, account),
            include: prepareIncludeObject(object, db)
          })
          .then(list => {
            res.json(list)
            return
          })
          .catch(next)
        break
      case 'POST':
      case 'PUT':
      case 'DELETE':
        next()
        return
    }
  }
})

/**
 *
 *
 * @param {SequelizeModel} object
 * @param {login} account
 * @returns Where query if candidateId or logIn id exists otherwise false
 */
function prepareWhereObject (object, account) {
  //TODO: create where query to append for each get request
  let where = {}
  return where
}

/**
 *
 *
 * @param {SequelizeModel} model
 * @param {Sequelize} db
 * @returns Include array for all references in specified model
 */
function prepareIncludeObject (model, db) {
  let include = []
  let attrs = Object.keys(model.attributes)

  attrs.forEach(attr => {
    let ref = model.attributes[attr].references
    if (ref) {
      let model = ref.model
      include.push(db[util.getModelName(model)])
    }
  })

  return include
}

module.exports = router
