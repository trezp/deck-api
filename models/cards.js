var mongoose = require('mongoose');

var CardSchema = mongoose.Schema({
  name: String,
  value: Number  
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card; 