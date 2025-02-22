
const {CityRepository} = require('../repositories')
const cityRepo = new CityRepository()
const logger = require("../utils/errors")
const AppError = require('../utils/errors/app-error');
async function createCity(data){
try{
const response = await cityRepo.create(data);
return response

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
async function getCity(data){
try{

    const response = await cityRepo.findAll()
return response
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
module.exports ={
    getCity,
    createCity
}