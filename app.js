var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search"); 
});

app.get("/results", function(req, res){
   var search = req.query.search;
   var stng = "http://www.omdbapi.com/?s=" + search + "&apikey=thewdb";
   request(stng, function(error, response, body){
      if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          res.render("results", {data: data});
      } 
   });
});

app.listen(8080,"localhost", function(){
    console.log("Movie Api Started!!!!");
});
