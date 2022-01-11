const express = require('express');
const path = require('path');
const morgan = require('morgan');
const homeRoute = require('./routers/homeRoutes');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());

if (process.env.NODE_ENVIRONMENT === 'development') {
  app.use(morgan('dev'));
}

// Home route
app.use(homeRoute);

module.exports = app;
