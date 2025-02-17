const { StatusCodes } = require('http-status-codes');
const { Airplaneservice } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/errors');

async function createAirplane(req, res) {
    try {
       
        if (!req.body.modelNumber || typeof req.body.capacity !== "number") {

            ErrorResponse.message = "modelNumber and capacity are required fields"
           ErrorResponse.data="its Air Plane controller"

            return res.status(StatusCodes.BAD_REQUEST).json({
             ErrorResponse
            });
        }

        // 🔹 Call Service Function
        const airplane = await Airplaneservice.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

     SuccessResponse.message = "Successfully created an Airplane"
   SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED).json({
           SuccessResponse
           
        });
    } catch (error) {
        console.error("Error creating airplane:", error.message);
        ErrorResponse.message="Failed to create an Airplane",
        ErrorResponse.error = error
        ErrorResponse.data = "its From AIr Plane Controller"

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
           ErrorResponse
        });
    }
}

module.exports = { createAirplane };
