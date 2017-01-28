'use strict';
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Services
const errorFactory = require('./Services/errorFactory');

// Middlewares
const traceGenerator = require('./middlewares/traceGenerator');
const authRequired = require('./middlewares/authRequired');

// Routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const postTypes = require('./routes/postTypes');
const posts = require('./routes/posts');
const commercialTypes = require('./routes/commercialTypes');
const commercials = require('./routes/commercials');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Register the routes
app.use('/auth', traceGenerator, auth);
app.use('/users', traceGenerator, authRequired, users);
app.use('/post-types', traceGenerator, authRequired, postTypes);
app.use('/posts', traceGenerator, authRequired, posts);
app.use('/commercial-types', traceGenerator, authRequired, commercialTypes);
app.use('/commercials', traceGenerator, authRequired, commercials);

// catch 404 and forward to error handler
app.use(traceGenerator, (req, res, next) => {
  next(errorFactory.notFound(req));
});

// error handler
app.use((err, req, res, next) => {
  // Write the error to the console
  console.error(err); // eslint-disable-line

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.errorMessage);
});

module.exports = app;
