var express = require('express');
var router = express.Router();
var cors = require('cors');
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tweeds Database' });
});

router.get('/tweeds', db.getAllTweeds);
router.get('/tweeds/:id', db.getTweed);
router.post('/tweeds/', db.createTweed);

module.exports = router;
