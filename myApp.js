let express = require('express');
let app = express();

// --> 7)  Mount the Logger middleware here
app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);

  next();
});

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

































module.exports = app;
