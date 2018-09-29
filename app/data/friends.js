var express = require("express");
var bodyparser = require("bodyparser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", (req,res) =>{
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", (req,res) =>{
    res.sendFile(path.join(__dirname, "survey.html"));
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});