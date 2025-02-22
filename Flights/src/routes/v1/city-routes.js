const express = require('express');
const CityController = require("../../controllers");
const router = express.Router();

// 🌆 Route to create a new city
router.post('/', CityController.CityController.createCity);

// 🌍 Route to get all cities
router.get('/', CityController.CityController.getAllCities);

module.exports = router;
