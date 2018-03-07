var express = require('express');
var router = express.Router();

var Card = require('../models/cards.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var king = new Card({name: 'King', value: 10}); 
  king.save(function(err, card){
    if (!err){
      res.json(king)
    }
    console.log(err)
  });
});

module.exports = router;
