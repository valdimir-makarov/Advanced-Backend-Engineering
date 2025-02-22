const CrudRepository = require('./crud-repository'); // Correctly import CrudRepository
const { Airplane } = require('../models'); // Import the Airplane model
const {city} = require('../models')
console.log("CrudRepository:", CrudRepository); // Debugging output

class CityRepository extends CrudRepository {
  constructor() {
    super(city);
  }
}
module.exports = CityRepository