var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var jsonOBJ = {messgae:"Hello"};
  res.json(jsonOBJ);
});

module.exports = router;
