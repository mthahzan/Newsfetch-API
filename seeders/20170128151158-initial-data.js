'use strict';
const {users, postTypes, commercialTypes, posts} = require('../data/initialData');

module.exports = {
  up: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Users', users),
      queryInterface.bulkInsert('PostTypes', postTypes),
      queryInterface.bulkInsert('CommercialTypes', commercialTypes),
      queryInterface.bulkInsert('Posts', posts),
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('Users', users),
      queryInterface.bulkDelete('PostTypes', postTypes),
      queryInterface.bulkDelete('CommercialTypes', commercialTypes),
      queryInterface.bulkDelete('Posts', posts),
    ]);
  },
};
