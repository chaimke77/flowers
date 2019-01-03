let data = require('../models/data');
let branches = require('../models/branches');
let express = require('express');
let router = express.Router();

router.post('/', function(req, res){
    branches.find({}, function (err, branchesList) {
        if (err) throw err;
        else
            res.render('partials/branchManagement', {branches: branchesList});
    });
});
module.exports = router;