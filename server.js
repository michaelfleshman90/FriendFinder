var express = require("express");
var bodyParser = require("bodyparser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});