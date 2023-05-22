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
// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {
 let string = `${req.method} ${req.path} - ${req.ip}`
 console.log(string) 
  next();
});

































module.exports = app;
