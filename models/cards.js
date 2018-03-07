var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
  name: String,
  value: Number  
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card; 