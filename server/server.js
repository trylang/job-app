const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.once('open', function() {
  console.log('mongo connect success haha');
});


// 新建app
const app = express();

app.get('/', function(req, res){
  res.send('<h1>hello express</h1>');
});

app.get('/data', (req, res) => {
  res.json({name:' haha', age: '18'});
})

app.listen(9093, function() {
  console.log('Node app start at port 9093');
})