'use strict';
const { Model } = require('sequelize');
const city = require('./city');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name should not be empty' }
      }
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Code is required' },
        notEmpty: { msg: 'Code should not be empty' }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
   model:city,
   key:id
      },

      validate: {
        notNull: { msg: 'CityId is required' },
        isInt: { msg: 'CityId must be an integer' }
      }
    }
  }, {
    sequelize,
    modelName: 'Airport'
  });
  return Airport;
};
