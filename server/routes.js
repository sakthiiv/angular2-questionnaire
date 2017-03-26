var express = require('express');
var queries = require('./queries');
var app = module.exports = express.Router();

app.get('/api/base-queries', function (req, res) {
    res.status(200).send(queries.getBaseQueries());
});

app.post('/api/level-queries', function (req, res) {
    if (!req.body.id) {
        return res.status(400).send("Root id not available!");
    }
    res.status(200).send(queries.getLevelQueries(req.body));
});