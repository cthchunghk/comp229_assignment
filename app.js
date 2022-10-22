var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// DB Initialization
let dbInitializer = require('./src/config/db');
dbInitializer.initializeDBConnection();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Auth initialization
var authConfig = require('./src/config/auth');
authConfig.initializePassport(app);

// TODO: Remember to add new path here
/*
Note: You will need to use the
router.get(path, callback(req, res, next)) method structure with a res.render(view, locals)
method call to render each view (13 Marks: Functionality).
*/
routerInitializer = require('./src/routes/index')
routerInitializer.useRouting(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
