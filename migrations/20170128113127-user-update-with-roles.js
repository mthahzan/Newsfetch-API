'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .addColumn('Users', 'role', {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['admin', 'consumer'], // TODO: Try to not hardcode this
        defaultValue: 'consumer',
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('Users', 'role');
  },
};
