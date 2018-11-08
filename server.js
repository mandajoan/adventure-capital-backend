
var express = require("express");

var cors = require('cors')
var app = express();

var PORT = 'https://adventure-capital-backend.herokuapp.com'|| 8080;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });