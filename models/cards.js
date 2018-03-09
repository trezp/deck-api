var mongoose = require('mongoose');
mongoose.set('debug', true)

const ValueCardSchema = mongoose.Schema({
  type: {type: String, default: "mileage"},
  played: {type: Boolean, default: false},
  value: Number
});

const SpecialCardSchema = mongoose.Schema({
  name: String,
  played: {type: Boolean, default: false},
  special: {type: Boolean, default: true}
});

const DeckSchema = mongoose.Schema({
  specialCards: [SpecialCardSchema],
  mileageCards: [ValueCardSchema]
});

const ValueCard = mongoose.model('ValueCard', ValueCardSchema);
const SpecialCard = mongoose.model('SpecialCard', SpecialCardSchema);
const Deck = mongoose.model('Deck', DeckSchema);


function makeValueCard(value, quantity){
  for(let i = 1; i <= quantity; i++){
    let card = new ValueCard({
      value: value
    })
    deck.mileageCards.push(card);
  }
}

function makeSpecialCard(name, quantity){
  for(let i = 1; i <= quantity; i++){
    let card = new SpecialCard({
      name: name,
    })
    deck.specialCards.push(card);
  }
}

const deck = new Deck;
makeSpecialCard("No Rocket Fuel", 3);
makeSpecialCard("Black Hole", 3);
makeValueCard(50, 5);
makeValueCard(100, 5);


module.exports = deck