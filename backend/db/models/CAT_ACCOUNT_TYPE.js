/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'catAccountType',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Description'
      }
    },
    {
      tableName: 'CAT_ACCOUNT_TYPE',
      timestamps: true,
      underscored: true,
      createdAt: 'CREATED_AT',
      updatedAt: 'UPDATED_AT',
      deletedAt: false
    }
  )
}
