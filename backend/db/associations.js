const util = require('./util')

module.exports = {
  associate: models => {
    // getRelations(models)
    // accountType -> login : accountTypeId
    models.login.belongsTo(models.accountType, {
      foreignKey: 'accountTypeId'
    })
  }
}

function getRelations (models) {
  Object.keys(models).forEach(modelName => {
    let model = models[modelName]

    Object.getOwnPropertyNames(model.attributes).forEach(attribute => {
      let references = model.attributes[attribute].references
      if (references) {
        let refModel = models[util.getModelName(references.model)]
        let refName = util.getModelName(refModel.tableName)
        let name = util.getModelName(model.tableName)
        let prop = toCamelCase(model.attributes[attribute].field)
        console.log(`\n// ${refName} -> ${name} : ${prop}`)
      }
    })
  })
}

function toCamelCase (str) {
  str = str
    .toLowerCase()
    .split('_')
    .map(item => {
      return item[0].toUpperCase() + item.substring(1)
    })
    .join('')

  return str[0].toLowerCase() + str.substring(1)
}
