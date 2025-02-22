const { StatusCodes } = require('http-status-codes');
const { CityServices } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/errors');

async function createCity(req, res) {
    try {
      console.log(req.body)

        // 🔹 Call Service Function
        const city = await CityServices.createCity({
            name: req.body.name,
    
        });
     

        SuccessResponse.message = "Successfully created a City";
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json({ SuccessResponse });
    }catch (error) {
        console.error("Error creating city:", error); // Log the entire error object
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to create a City",
            error: {
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
                explanation: error.message || "Unexpected error occurred"
            }
        });
    }
    
}

async function getAllCities(req, res) {
    try {
        const cities = await CityServices.getAllCities();
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (error) {
        console.error("Error fetching cities:", error.message);
        ErrorResponse.message = "Failed to get all Cities";
        ErrorResponse.error = error;
        ErrorResponse.data = "From City Controller";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

module.exports = { createCity, getAllCities };