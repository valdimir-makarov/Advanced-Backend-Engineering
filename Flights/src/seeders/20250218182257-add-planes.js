'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airplane', [
      {
        modelNumber: 'Boeing 737',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A320',
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 777',
        capacity: 396,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Embraer E190',
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airplane', null, {});
  }
};
