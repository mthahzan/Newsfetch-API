'use strict';
module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
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
    PostTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.PostType);
        Post.belongsTo(models.User);
      },
    },
  });
  return Post;
};
