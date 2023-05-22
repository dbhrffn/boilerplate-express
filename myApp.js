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

/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
  req.time = Date().toString();
  next();
}, (req, res) => {
  res.json({
    "time": req.time
  });
});

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get("/name", (req, res) => {
  const { first: firstName, last: lastName } = req.query;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */
app.post('/name', (req, res) => {
  const { first: firstName, last: lastName } = req.body;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;