let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let app = express();
let favicon = require('serve-favicon');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let catalogRouter = require('./routes/catalog');
let contactUsRouter = require('./routes/contactUs');
let aboutRouter = require('./routes/about');
let branchRouter = require('./routes/branch');
let fileUpload = require('express-fileupload');
let multer = require('multer');
let upload = multer({
    dest: "public/photos/"
});
let connectMongo = require('connect-mongo');
let passport = require('passport');
let expressSession = require('express-session');

// view engine setup
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(fileUpload());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/userManagement', usersRouter);
app.use('/catalog', catalogRouter);
app.use('/about', aboutRouter);
app.use('/contactUs', contactUsRouter);
app.use('/catalog', catalogRouter);
app.use('/branchManagement', branchRouter);

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
let flash = require('connect-flash');
app.use(flash());

// Initialize Passport
let initPassport = require('./passport/init');
initPassport(passport);

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
