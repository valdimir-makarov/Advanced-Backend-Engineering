'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [3, 5] // Assuming airport codes are between 3 to 5 characters
        }
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cities', // Assumes there is a Cities table
          key: 'id'
        },
     
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });

    // Adding indexes
    await queryInterface.addIndex('Airports', ['name']);
    await queryInterface.addIndex('Airports', ['code']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');
  }
};
