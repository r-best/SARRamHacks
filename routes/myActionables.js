/**
 * Created by JuliusCeasar on 9/17/2016.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var json = JSON.parse(fs.readFileSync('..\\brock.json', 'utf8'));
    res.render('myActionables', { data: json, title: 'my Actionables'});
});

module.exports = router;
