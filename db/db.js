var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/light_years');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected at port 3000");
});

module.exports = db;