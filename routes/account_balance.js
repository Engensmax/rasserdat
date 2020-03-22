var express = require('express');
var router = express.Router();
var lowdb_access = require('../lowdb_access');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var balance = lowdb_access.current_balance();


  res.json({balance_message: balance});
});

router.post('/deposit', function(req, res, next){
});

module.exports = router;
