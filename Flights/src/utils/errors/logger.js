const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }), // Include stack trace
    format.json() // Store logs in JSON format
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }), // Log errors to file
    new transports.Console(), // Log to console
  ],
});

module.exports = logger;
