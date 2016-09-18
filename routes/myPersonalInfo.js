/**
 * Created by JuliusCeasar on 9/17/2016.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    var pathToJson = path.resolve('brock.json');
    var json = JSON.parse(fs.readFileSync(pathToJson , 'utf8'));
    res.render('myPersonalInfo', { data: json, title: 'My Personal Infos'});
});

module.exports = router;
