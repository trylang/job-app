var express = require('express');
var router = express.Router();

// 定义网站主页的路由
router.get('/info', function(req, res) {
  return res.json({code: 2});
});


module.exports = router;