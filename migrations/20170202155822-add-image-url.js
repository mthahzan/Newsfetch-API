'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface
        .addColumn('PostTypes', 'imageURL', {
          allowNull: true,
          type: Sequelize.STRING,
        }),

      queryInterface
        .addColumn('CommercialTypes', 'imageURL', {
          allowNull: true,
          type: Sequelize.STRING,
        }),
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface
        .removeColumn('PostTypes', 'imageURL'),

      queryInterface
        .removeColumn('CommercialTypes', 'imageURL'),
    ]);
  },
};
