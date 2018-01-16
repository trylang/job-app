var express = require('express');
var router = express.Router();
var model = require('./model');

var User = model.getModel('user');

router.post('/register', function(req, res) {
  console.log(req);
  // User.create(req.body, function(err, res) {
  //   console.log(res);
  //   return res.data;
  // })
})

router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  })
  
})

// 定义网站主页的路由
router.get('/info', function(req, res) {
  return res.json({code: 2});
});

module.exports = router;