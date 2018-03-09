const mongoose = require('mongoose');
mongoose.set('debug', true);

const CardSchema = mongoose.Schema({
  value: {type: Number, default: 0},
  cardType: {type: String, default: "mileage"},
  cardAttr: {type: String, default: "none"},
  quantity: Number,
  discarded: {type: Boolean, default: false}
});

const DeckSchema = mongoose.Schema({
  cards: [CardSchema]
});

const Card = mongoose.model('Card', CardSchema);
const Deck = mongoose.model('Deck', DeckSchema);

function makeMileageCard(value, quantity){
  return new Card({
    value: value,
    quantity: quantity
  });
};

function makeSpecialCard(cardType, cardAttr, quantity){
  return new Card({
    cardType: cardType,
    cardAttr: cardAttr,
    quantity: quantity 
  });
};

const deck = new Deck;

deck.cards.push(
  makeSpecialCard('break', 'no-gas', 3),
  makeSpecialCard('fix', 'gas', 3),
  makeSpecialCard('break', 'black-hole', 3),
  makeSpecialCard('fix', 'event-horizon', 3),
  makeMileageCard(50, 5),
  makeMileageCard(100, 5),
  makeMileageCard(150, 5),
  makeMileageCard(200, 3),
);

module.exports = deck