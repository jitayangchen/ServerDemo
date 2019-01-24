var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getdata', function (req, res) {
  let name = req.query.name;
  let sex = req.query.sex;
  let arr = {name: name, sex: sex};
  res.send(arr);
});

module.exports = router;
