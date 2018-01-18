var express = require('express');
var router = express.Router();
var imgsPath = require('../static/test.json');

router.get('/imgsPath', function(req, res) {
  res.json(imgsPath);
});

module.exports = router;