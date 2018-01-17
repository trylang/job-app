var express = require('express');
var router = express.Router();
var utility = require('utility');

var model = require('./model');
var User = model.getModel('user');

router.post('/login', function(req, res) {
  const {user, pwd} = req.body;
  User.findOne({user, pwd: md5Pwd(pwd)}, {pwd: 0}, function(err, doc) {
    if(!doc) {
      return res.json({code: 1, msg: '用户名或者密码错误'});
    }
    return res.json({code: 0, data: doc});
  })
})

router.post('/register', function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({user}, function(err, cb) {
    if(cb) {
      return res.json({code: 1, msg: '用户名重复'});
    }
    User.create({user, type, pwd: md5Pwd(pwd)}, function(err, doc) {
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

function md5Pwd(pwd) {
  var salt = 'dede';
  return utility.md5(utility.md5(pwd + salt));
}

module.exports = router;