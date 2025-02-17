const { AirplaneRepository } = require('../repositories');
const { ErrorResponse } = require('../utils/errors');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const response = await airplaneRepository.create(data);
        return response;
    } 
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorsObject = error.errors.reduce((acc, err) => {
                acc[err.path] = err.message; // `err.path` is the field name
                return acc;
              }, {});
            throw new AppError(400, errorsObject, errorsObject); // Throw error instead of returning response
          }
          throw new AppError(500, "Internal Server Error"); // Generic error handling
        }
      
    
}

module.exports = {
    createAirplane
};
