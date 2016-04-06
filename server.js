'use strict';
var http = require('http');
var path = require('path');
var express = require('express');
var logger = require('morgan');

var app = express();
var server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', {title: 'Shape Factory'});
});

server.listen(3000);
module.exports = app;
