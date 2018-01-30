module.exports = {
  associate: models => {
    models.login.belongsTo(models.accountType)
  }
}
