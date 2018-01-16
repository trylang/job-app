var express = require('express');
var router = express.Router();
var model = require('./model');

var User = model.getModel('user');

router.post('/register', function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({user}, function(err, cb) {
    if(cb) {
      return res.json({code: 1, msg: '用户名重复'});
    }
    User.create({user, pwd, type}, function(err, doc) {
      if(doc) {
        return res.json({code: 0});
      }
      else {
        return res.json({code: 1, msg: '后端出问题了'});
      }
      
    })
  })
  
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