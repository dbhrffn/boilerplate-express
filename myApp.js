let express = require('express');
let app = express();

//declare public
app.use(express.static(__dirname + "/public"));

// use files in public
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    var response = "Hello json".toUpperCase();
  } else {
    var response = "Hello json";
  }
  res.json({
    message: response
  });
});

//set up your own middleware
app.use((req, res, next) {
 console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

































module.exports = app;
