const { createAirplane } = require("./airplane-controller");
const {getAllAirplanes } =require("./airplane-controller")

module.exports ={
AboutController:require("./about-controller"),
HomeController: require("./home-controller"),
InfoController : require("./info-controller"),
AirplaneController:require("./airplane-controller"),
getAllAirplanes,
CityController:require("./city-controller")
};