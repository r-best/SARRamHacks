/**
 * Created by JuliusCeasar on 9/17/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('myEducation', { title: 'My Education' });
});

module.exports = router;