'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Add the column allowing NULL values
    await queryInterface.addColumn('cities', 'type', {
      type: Sequelize.STRING,
      allowNull: true, // temporary allow null
      unique: false
    });

 

  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('cities', 'type');
  }
};
