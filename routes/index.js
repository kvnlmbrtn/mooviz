var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose= require('mongoose');
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};

mongoose.connect('mongodb://kevin:kevin2018@ds235833.mlab.com:35833/mooviz',
    options,
    function(err) {
      console.log(err);
    }
);

/* GET home page. */
var lastMoviesDatabase = {};

router.get('/', function(req, res, next) {

  var realArtists = ["Dr. Dre", "2pac", "M&M's"];

  for (var i=0; i<realArtists.length; i++) {
    data.artists.push(realArtists[i]);
  }

  res.json(data);

});

module.exports = router;
