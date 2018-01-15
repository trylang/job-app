const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.once('open', function() {
  console.log('mongo connect success haha');
});