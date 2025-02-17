const express = require('express');
const AirplaneController = require("../../controllers");
const validateRequests = require('../../middlewares/airplane-middleware');
console.log(AirplaneController)
 const router = express.Router();

// // ✈️ Route to create a new airplane
 router.post('/',validateRequests, AirplaneController.AirplaneController.createAirplane);

 module.exports = router;
