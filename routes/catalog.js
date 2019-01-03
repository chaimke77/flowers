//let data = require('../models/data');
let flower = require('../models/flowers');
let express = require('express');
let router = express.Router();

router.post('/', function(req, res){
    flower.find({}, function (err, flowesList) {
        if (err) throw err;
        else
        res.render('partials/catalog', {flowers:flowesList, category:req.body.category});
    });
});

module.exports = router;

