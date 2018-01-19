var express = require('express');
var router = express.Router();
var utility = require('utility');

var model = require('./model');
var User = model.getModel('user');

var _filter = {pwd: 0, __v: 0};

router.post('/login', function(req, res) {
  const {user, pwd} = req.body;
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function(err, doc) {
    if(!doc) {
      return res.json({code: 1, msg: '用户名或者密码错误'});
    }
    res.cookie('userid', doc._id);
    return res.json({code: 0, data: doc});
  })
});

router.post('/register', function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({user}, function(err, cb) {
    if(cb) {
      return res.json({code: 1, msg: '用户名重复'});
    }
    // 这里不能用create，因为不会产生_id字段，所以需要save方法
    const userModel = new User({user, type, pwd: md5Pwd(pwd)});
    userModel.save(function(err, doc) {
      if(doc) {
        res.cookie('userid', doc._id);
        return res.json({code: 0, data: doc});
      }
      else {
        return res.json({code: 1, msg: '后端出问题了'});
      }
    });
  })  
});

router.post('/update', function(req, res) {
  const userid = req.cookies.userid;
  if(!userid) {
    return res.json({code: 1});
  }
  User.findByIdAndUpdate(userid, req.body, function(err, doc) {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, req.body);
    return res.json({code: 0, data});
  })
});

router.get('/list', function(req, res) {
  const type = req.body;
  User.find(type, _filter, function(err, doc) {
    return res.json({code: 0, data: doc});
  })
  
});

// 定义网站主页的路由
router.get('/info', function(req, res) {
  const userid = req.cookies.userid;
  // 如果没有userID，说明没有登录过，需要跳转到登录页面
  if (!userid) {
		return res.json({code:1})
	}
  User.findOne({_id: userid}, _filter, function(err, doc) {
    if(err) {
      return res.json({code: 1, msg: '后端出问题啦'});
    }
    return res.json({code: 0, data: doc});
  })
  
});

function md5Pwd(pwd) {
  var salt = 'dede';
  return utility.md5(utility.md5(pwd + salt));
};

module.exports = router;