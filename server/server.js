const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.once('open', function() {
  console.log('mongo connect success haha');
});

// 定义User表和属性
var User = mongoose.model('User', mongoose.Schema({
  user: String,
  age: Number
}));

// 新建app
const app = express();

app.get('/', function(req, res){
  var user = new User({
    user: 'langlang',
    age: 18
  });
  user.save();
  res.send('<h1>hello express</h1>');
});

app.get('/data', (req, res) => {
  User.findOne({age: 18}, function(err, user) {
    if(err) return console.error(err);
    res.json(user);
  })
})

app.listen(9093, function() {
  console.log('Node app start at port 9093');
})