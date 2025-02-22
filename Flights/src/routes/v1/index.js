const express = require('express');
const router = express.Router();
const {InfoController }=require("../../controllers/index")
const airplaneroutes =require('./airplane-routes')
const cityRoutes = require("./city-routes")
router.use('/airplane',airplaneroutes);
router.use('/cityroutes',cityRoutes)
// Example route
router.get('/hello', InfoController.info)

module.exports = router;