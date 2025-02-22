const { where } = require('sequelize');
const app = require('./app');
const { customFormate } = require('./config/logger-config');
const city = require('./models/city');
const PORT = process.env.PORT || 3001;

app.listen(PORT, async() => {
  console.log(`Server is running on http://localhost:${PORT}`);
    customFormate.info("this is a trial",{
      label:"Server",
    })

    const {city,Airport} =require('../src/models')
 await city.destroy({

where:{
  id:33
}

 })



});