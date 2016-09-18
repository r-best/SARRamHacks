/**
 * Created by JuliusCeasar on 9/17/2016.
 */
var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var json = JSON.parse(fs.readFileSync('..\\brock.json', 'utf8'));
    res.render('myLoans', { data: json, title:"My Loans"});
});

module.exports = router;
