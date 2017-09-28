//index.js

﻿var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var routes  = require('route');
var log = require('loglevel');
var cors = require('cors'); // Corss-Domain Origin Access 설정



var app = express(); //express를 실행하여 app object를 초기화 합니다.

// Constants
var Constants = require("./const");
log.setLevel(Constants.LOGLEVEL);

// app.use는 HTTP method에 상관없이 무조건 실행되는 부분입니다.
// express.static를 사용해 static폴더를 지정하였습니다.
app.use(express.static(__dirname + '/public')); // 1

// Corss-Domain Allow Setting
if (Constants.DEV) {
  app.use(cors());
}

// like interceptor
app.use(function(req, res, next) {
  // Put some preprocessing here.
  log.debug("req.ip :: " + req.ip);
  log.debug("req.hostname :: " + req.hostname);
  log.debug("req.baseUrl :: " + req.baseUrl);
  log.debug("req.originalUrl :: " + req.originalUrl);
  log.debug("req.url :: " + req.url);

  // 다음 실행
  next();
});

// api
var testApi = require('./api/test');
app.get('/getlist', testApi.getList);
app.post('/postlist', testApi.postList);

var  promiseApi = require('./api/promise');
app.get('/promise', promiseApi.promise);

// The reason this does not work is that your server is not catching
// all other routes and routing them to your single page app which is served
// for angular2
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/' + 'index.html');
})

/*
* 에러 페이지 처리 추가
*/
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).sendFile(__dirname + '/public/' + 'error-500.html');
});

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/' + 'error.html');
});

app.listen(3000, function(){ //3000번 포트를 사용합니다.
 log.debug('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
