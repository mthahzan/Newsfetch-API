'use strict';
module.exports = function(sequelize, DataTypes) {
  const CommercialType = sequelize.define('CommercialType', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    classMethods: {
      associate: function(models) {
        CommercialType.hasMany(models.Commercial);
      },
    },
  });
  return CommercialType;
};
