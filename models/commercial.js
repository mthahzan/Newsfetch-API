'use strict';
module.exports = function(sequelize, DataTypes) {
  const Commercial = sequelize.define('Commercial', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    imageURL: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    CommercialTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Commercial.belongsTo(models.CommercialType);
        Commercial.belongsTo(models.User);
      },
    },
  });
  return Commercial;
};
