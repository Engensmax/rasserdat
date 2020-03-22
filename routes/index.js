var express = require('express');
var router = express.Router();
var lowdb_access = require('../lowdb_access');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.message)
  res.render('index', { balance: lowdb_access.current_balance(), message: req.query.message});
});

router.post('/', function(req, res, next) {

  console.log(req.body.name);
  console.log(req.body.type);
  console.log(req.body.amount);
  console.log(req.body.comment);

  var top_type = ""
  switch(req.body.type) {
    case "Einkaufen":
      top_type = "Food";
    case "Resti":
      top_type = "Food";
    case "Cat":
      top_type = "Stuff";
    case "Other":
      top_type = "Stuff";
    case "Miete":
      top_type = "Rechnungen";
    case "Internet":
      top_type = "Rechnungen";
    case "Heizung":
      top_type = "Rechnungen";
    case "Wasser":
      top_type = "Rechnungen";
    case "Strom":
      top_type = "Rechnungen";
    default:
      "Error"
  }

  lowdb_access.deposit(req.body.name,
    parseFloat(req.body.amount),
    top_type,
    req.body.type,
    req.body.comment);

  res.redirect('/?message=Entry received!')
});

module.exports = router;
