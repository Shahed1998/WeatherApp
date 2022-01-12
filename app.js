const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const homeRoute = require('./routers/homeRoutes');

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENVIRONMENT === 'development') {
  app.use(morgan('dev'));
}

// Home route
app.use(homeRoute);

module.exports = app;
