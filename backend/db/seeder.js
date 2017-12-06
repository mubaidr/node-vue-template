module.exports = {
  seed (models, callback) {
    // Account Types
    models.accountType
      .findAndCountAll({
        where: {
          id: [1, 2]
        }
      })
      .then(res => {
        if (res.count < 2) {
          models.accountType.bulkCreate([
            {
              id: 1,
              description: 'User'
            },
            {
              id: 2,
              description: 'Admin'
            }
          ])
        }
      })

    callback()
  }
}
