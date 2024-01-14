const express = require('express');

const apiRouter = require('./notes');

const app = express();

app.use('/api', apiRouter);

module.exports = app;