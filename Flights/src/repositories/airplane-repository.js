const CrudRepository = require('./crud-repository'); // Correctly import CrudRepository
const { Airplane } = require('../models'); // Import the Airplane model

console.log("CrudRepository:", CrudRepository); // Debugging output

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports =  AirplaneRepository; // ✅ Correctly export an instance
