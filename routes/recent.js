var express = require('express');
var router = express.Router();
var lowdb_access = require('../lowdb_access');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.message)
  res.render('recent', { recent: lowdb_access.get_logs(), message: req.query.message});
});

module.exports = router;
