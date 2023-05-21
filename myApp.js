let express = require('express');
let app = express();

app.get("/", (req, res) => {
  logger.log("info", "Request received: ", req);
  res.send("Hello Express");
});




































module.exports = app;
