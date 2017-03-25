var express = require('express');
var queries = require('./queries');
var app = module.exports = express.Router();

app.get('/api/base-queries', function(req, res) {
  res.status(200).send(queries.getBaseQueries());
});