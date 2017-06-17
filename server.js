var request = require("request");

var twitter = require("twitter");

var spotify = require("spotify");

var express = require("express");

var app = express();

app.get('/', function (req, res) {
  res.send('index.html');
})

//PORT
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App connected on Port", port);
}); 