'use strict';
const users = [{
  id: 1,
  name: 'Mohomed Thahsan',
  authName: '0711234567',
  password: 'FmHyauGHmLFDSpDwymoEeMACxsBOQUF0SiGWCm4v45E=',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: 2,
  name: 'Mohomed Usaidh',
  authName: '0710987654',
  password: 'FmHyauGHmLFDSpDwymoEeMACxsBOQUF0SiGWCm4v45E=',
  role: 'consumer',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

const postTypes = [{
  id: 1,
  name: 'General',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: 2,
  name: 'Political',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: 3,
  name: 'Sports',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: 4,
  name: 'International',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: 5,
  name: 'Janaza',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

// Unable to add boolean values to seed files. Fix it

const commercialTypes = [{
  id: 1,
  name: 'General',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

module.exports = {
  up: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Users', users),
      queryInterface.bulkInsert('PostTypes', postTypes),
      queryInterface.bulkInsert('CommercialTypes', commercialTypes),
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('Users', users),
      queryInterface.bulkDelete('PostTypes', postTypes),
      queryInterface.bulkDelete('CommercialTypes', commercialTypes),
    ]);
  },
};
