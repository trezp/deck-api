var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Card = require('../models/cards.js')


/* GET home page. */
router.get('/', function(req, res) {
  var king = new Card({name: "Kingy", value: 10});
  
  king.save(function(err, card){
    if(err) throw err;
    res.json(card)
  })
});

router.get('/something', function(req, res) {
  Card.find({}, function(err, card){
    if(err) throw err; 
    res.json(card)
  });
});
module.exports = router;
