var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Card = require('../models/cards.js').Card
const Deck = require('../models/cards.js').Deck

/* GET home page. */
router.get('/', function(req, res) {
  //var king = new Card({name: "Kingy", value: 10, special: "Blah"});
  var deck = new Deck;

  const makeDeck = function(){
    for (let i = 0; i <= 10; i++){
      let card = new Card({name: 'card' + i, value: i, special: "Blah"+ i})
      deck.deck.push(card);
    };
  }

  makeDeck();
  
  deck.save(function(err, deck){
    if(err) throw err;
    res.json(deck);
  })
});

router.get('/something', function(req, res) {
  Card.find({}, function(err, card){
    if(err) throw err; 
    res.json(card)
  });
});
module.exports = router;
