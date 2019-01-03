let data = require('../models/data');
let express = require('express');
let router = express.Router();

router.post('/', function(req, res){

    res.render('partials/about');
});

module.exports = router;