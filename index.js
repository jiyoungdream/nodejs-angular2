//index.js

﻿var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var routes  = require('route');
var log = require('loglevel');


var app = express(); //express를 실행하여 app object를 초기화 합니다.

// Constants
var Constants = require("./const");
log.setLevel(Constants.LOGLEVEL);

// app.use는 HTTP method에 상관없이 무조건 실행되는 부분입니다.
// express.static를 사용해 static폴더를 지정하였습니다.
app.use(express.static(__dirname + '/public')); // 1

// like interceptor
app.use(function(req, res, next) {
  // Put some preprocessing here.
  console.log("req.ip :: " + req.ip);
  console.log("req.hostname :: " + req.hostname);
  console.log("req.baseUrl :: " + req.baseUrl);
  console.log("req.originalUrl :: " + req.originalUrl);
  console.log("req.url :: " + req.url);
  
  next();
});

// api
var testApi = require('./api/test');
app.get('/getlist', testApi.getList);
app.post('/postlist', testApi.postList);

// The reason this does not work is that your server is not catching
// all other routes and routing them to your single page app which is served
// for angular2
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/' + 'index.html');
})
app.listen(3000, function(){ //3000번 포트를 사용합니다.
 console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
