const { StatusCodes } = require("http-status-codes");
const convertKeysToCamelCase = require("./camelCaseConverter");
const { ErrorResponse } = require("../utils/errors");

function validateRequests(req,res,next){


    if(req.body && typeof req.body ==='object'){

        req.body = convertKeysToCamelCase(req.body)
        next();
        
    }
    else{

  return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)

    }
   



}
module.exports =validateRequests