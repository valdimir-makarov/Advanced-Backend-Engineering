'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cities', [
      { name: 'New York', type: 'Metropolitaneeeee', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles', type: 'Urban', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chicago', type: 'Metropolitan', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Houston', type: 'Urbaneeee', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cities', null, {});
  }
};
