'use strict';
var express = require('express');
var router = express.Router();
var Data = require('./Mongo_client.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('overview');
});

/* GET Login page. */
router.get('/login', function (req, res) {
    res.render('login_page');
});


/* GET product page. */
router.get('/products', function (req, res) {
    res.render('product');
});


module.exports = router;


