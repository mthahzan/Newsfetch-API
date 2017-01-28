'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    authName: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
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
