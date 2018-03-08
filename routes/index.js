var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var a = req.body.a;
  var b = req.body.b;
  var c = req.body.c;
  var ans = a+b*c;
  var jsonOBJ = {
    val1: a,
    val2: b,
    val3: c,
    formular: "a+b*c",
    ans: ans,
    messgae:"Finish"
  };
  res.json(jsonOBJ);
});

module.exports = router;
