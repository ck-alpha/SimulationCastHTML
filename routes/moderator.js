var express = require('express');
var router = express.Router();

/* GET moderator page. */
router.get('/', function(req, res, next) {
  res.render('moderator', { title: 'Simulation Cast Moderator' });
});

module.exports = router;
