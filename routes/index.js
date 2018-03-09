var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const deck = require('../models/cards.js')

router.get('/', function(req, res) {
  deck.save(function(err, deck){
    if(err) throw err;
    res.json(deck);
  })
});

module.exports = router;
