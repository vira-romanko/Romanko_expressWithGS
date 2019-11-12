var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log( "send back the static file");
  res.sendFile((path.join(__dirname, '../views/index.html')));
});

module.exports = router;
