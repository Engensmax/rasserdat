var express = require('express');
var router = express.Router();
var lowdb_access = require('../lowdb_access');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('balance', { logs: lowdb_access.get_logs(), message: req.query.message});
});

module.exports = router;
