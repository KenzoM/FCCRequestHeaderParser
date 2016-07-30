var cookieParser = require('cookie-parser');
var express = require('express');
var path = require('path')
var app =  express();
var port = 3000;

app.use(cookieParser());

app.get('/',function(req,res){
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
  if (err) {console.error(err)}
  console.log('This is the homepage')
  });
})

app.get('/whoami', function(req,res){
  var ua = req.headers['user-agent'] //gets users information
  var regex = /\(([^)]+)\)/ //to get the user operating system via regex
  var userLanguage = req.cookies['language']
  var userOS = ua.match(regex)[1]
  var userIPAddress = req.ip
  res.json({
    ip_address: req.ip,
    language: userLanguage,
    software: userOS
  })
})

app.listen(port, function(data){
  console.log('It is listening in port:', port)
})
