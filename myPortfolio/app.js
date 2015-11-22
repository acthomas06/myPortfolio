var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static(__dirname));
app.all('/', function(req, res, next) {
  res.sendFile('index.html', {root: __dirname});
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/javascripts', express.static(__dirname + '/public/javascripts'));
app.use('/views', express.static(__dirname + '/views'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error.', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});

var port = 80;
app.listen(port);
console.log("Listening on port " + port);
module.exports = app;
