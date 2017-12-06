/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tblLogin',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'EMAIL'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'PASSWORD'
      },
      isConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'IS_CONFIRMED'
      },
      profile: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
        field: 'PROFILE'
      },
      picturePath: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'PICTURE_PATH'
      },
      accountTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '1',
        references: {
          model: 'CAT_ACCOUNT_TYPE',
          key: 'ID'
        },
        field: 'ACCOUNT_TYPE_ID'
      }
    },
    {
      tableName: 'TBL_LOGIN',
      timestamps: true,
      underscored: true,
      createdAt: 'CREATED_AT',
      updatedAt: 'UPDATED_AT',
      deletedAt: false
    }
  )
}
