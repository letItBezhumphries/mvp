var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }))




app.listen(3008, function() {
  console.log('listening on port 3000!');
});

