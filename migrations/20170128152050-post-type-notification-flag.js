'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .addColumn('PostTypes', 'notification', {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('PostTypes', 'notification');
  },
};
