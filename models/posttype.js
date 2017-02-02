'use strict';
module.exports = function(sequelize, DataTypes) {
  const PostType = sequelize.define('PostType', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    notification: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    imageURL: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        PostType.hasMany(models.Post);
      },
    },
  });
  return PostType;
};
