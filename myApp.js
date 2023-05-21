let express = require('express');
let app = express();

//declare public
// app.use(express.static(__dirname + "/public"));

// use files in public
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});




































module.exports = app;
