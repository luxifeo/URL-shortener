var express = require('express');

var path = require('path');

var mongo = require('mongodb');

var routes = require('./route.js');

var api = require('./app/shorten.js');
var app = express();

mongo.MongoClient.connect("mongodb://admin:admin@ds123146.mlab.com:23146/url", function(err, db) {
  if (err) {
   throw new Error('Database failed to connect!');
  } else {

    console.log('Successfully connected to MongoDB on port 27017.');
  app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html')
  })
  app.get('/new',function(req,res){
    res.send("You must insert a link ")
  })
  api(app, db);
  
  var port = 8080;

  app.listen(port, function() {

    console.log('Node.js listening on port ' + port);

  });
  }})
 