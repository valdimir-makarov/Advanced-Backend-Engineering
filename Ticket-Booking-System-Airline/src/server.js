const app = require('./app');
const { customFormate } = require('./config/logger-config');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
    customFormate.info("this is a trial",{
      label:"Server",
    })

});