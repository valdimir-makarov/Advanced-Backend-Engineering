const express = require('express')
const router = express.Router();
const Router1= require('./v1/index');

 router.use('/v1',Router1);
module.exports=router