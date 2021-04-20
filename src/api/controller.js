'use strict';

var properties = require('../../package.json')
var distance = require('../service/distance');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    home: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.send('<h1>Hello</h1><br/><a href="/about">about</a><br/><a href="/distance/90001/10001">distance</a>');
    },
    getDistance: function(req, res) {
        distance.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;