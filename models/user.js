'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    authName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['admin', 'consumer'], // TODO: Try to not hardcode this
      defaultValue: 'consumer',
    },
    appPreferences: DataTypes.JSON,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
  return User;
};
