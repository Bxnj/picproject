var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/story", function(req, res){
    res.render("story");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp Server is online!");
});
