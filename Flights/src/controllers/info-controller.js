const { StatusCodes, getReasonPhrase,ReasonPhrases } = require('http-status-codes');

const info = (req, res) => {
  return res.status(StatusCodes.OK)
  .send(ReasonPhrases.OK);
};



module.exports = {
  info
};
