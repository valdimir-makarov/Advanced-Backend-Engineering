const express = require('express');
const router = express.Router();
const {InfoController }=require("../../controllers/index")
const airplaneroutes =require('./airplane-routes')

router.use('/airplane',airplaneroutes);
// Example route
router.get('/hello', InfoController.info)

module.exports = router;