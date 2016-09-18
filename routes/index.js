var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("fun");
  var pathToJson = path.resolve('brock.json');
  var json = JSON.parse(fs.readFileSync(pathToJson , 'utf8'));
  res.render('index', { data: json, title: 'FAFSA Companion'});
});

router.get('/json', function(req, res, next) {
	console.log("funasdfasdf");
	var json = JSON.parse(fs.readFileSync('brock.json', 'utf8'));
    res.send(json);
});

module.exports = router;
