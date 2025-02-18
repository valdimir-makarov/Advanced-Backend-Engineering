const express = require('express');
const AirplaneController = require("../../controllers");
const validateRequests = require('../../middlewares/airplane-middleware');
 const router = express.Router();

// // ✈️ Route to create a new airplane
 router.post('/',validateRequests, AirplaneController.AirplaneController.createAirplane);
router.get('/',AirplaneController.AirplaneController.getAllAirplanes)
 module.exports = router;
