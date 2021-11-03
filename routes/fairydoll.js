var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fairydoll', { title: 'search results for Fairy Doll' });
});

module.exports = router;