var express = require('express');
var router = express.Router();
var images = require('../models/data.json');

router.get('/', function(req, res, next) {
    res.render('memes', {injectedMemes: images});
});

router.get('/json', function(req, res){
    res.send(images);
});

module.exports = router;
