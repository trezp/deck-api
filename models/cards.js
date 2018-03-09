var mongoose = require('mongoose');
mongoose.set('debug', true)


const CardSchema = mongoose.Schema({
  name: String,
  value: Number,
  special: String
});

const DeckSchema= mongoose.Schema({
  deck: [CardSchema]
});

const Card = mongoose.model('Card', CardSchema);
const Deck = mongoose.model('Deck', DeckSchema)

module.exports = {Card, Deck}