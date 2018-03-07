var mongoose = require('mongoose');
mongoose.set('debug', true)
var CardSchema = mongoose.Schema({
  name: String,
  value: Number  
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card; 