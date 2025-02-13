const express = require('express');
const router = express.Router();
const {InfoController }=require("../../controllers/index")
// Example route
router.get('/hello', InfoController.info)

module.exports = router;