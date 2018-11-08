// require("dotenv").config();
var express = require("express");

var cors = require('cors')
var app = express();

var PORT = process.env.PORT|| 8080;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });