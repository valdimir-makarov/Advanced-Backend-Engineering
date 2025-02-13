//i am using it for better error handing and
//error logging
// this is a npm package though
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

// this the basic template for betetr logging
//cheakout the docs
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const customFormate = createLogger({

    formate: combine(

       


        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }),

        myFormat
        






    ),
    transports:[

     
       //this will print the Errors in the console of VScode and Files
        new transports.File({ filename: 'ErrorLoggerFile.log' })
        ,
        new transports.Console()
          
    ],



})

module.exports ={

    customFormate
}