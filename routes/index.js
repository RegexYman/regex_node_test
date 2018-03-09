var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var a = req.headers.a;
  var b = req.headers.b;
  var c = req.headers.c;
  var ans = a+b*c;
  var vvccc;
  var jsonOBJ = {
    value1: a,
    value2: b,
    value3: c,
    formular: "a+b*c",
    ans: ans,
    messgae:"Finish"
  };
  res.json(jsonOBJ);
});

module.exports = router;
