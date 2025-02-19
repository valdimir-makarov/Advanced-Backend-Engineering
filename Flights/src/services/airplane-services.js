const { AirplaneRepository } = require('../repositories');
const { ErrorResponse } = require('../utils/errors');
const AppError = require('../utils/errors/app-error');
const { error } = require('../utils/errors/error-response');
const logger = require('../utils/errors/logger');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const response = await airplaneRepository.create(data);
        if(!response){
          logger.error("error in Creating Airplanes all ariplanes",`${error.message}`)
        }
        return response;
    } 
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorsObject = error.errors.reduce((acc, err) => {
                acc[err.path] = err.message; // `err.path` is the field name
                return acc;
              }, {});
            throw new AppError(400, errorsObject, errorsObject); 
          }
          throw new AppError(500, "Internal Server Error"); // Generic error handling
        }
      
    
}

async function getAllAirplanes() {
  try {
    const response = await airplaneRepository.findAll();
    if(!response){
      logger.error("error in get all ariplanes",`${error.message}`)
    }
    return response;
  } catch (error) {
    logger.error(`Error in getAllAirplanes: ${error.message}`, {
      stack: error.stack,
      error,
    });

    throw new AppError(500, "Internal Server Error"); // Don't expose internal details
  }
}

module.exports = {
    createAirplane,
    getAllAirplanes
};
