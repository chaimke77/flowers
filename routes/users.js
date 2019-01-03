let data = require('../models/data');
let users = require('../models/users');
let branches = require('../models/branches');
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.post('/', function(req, res){
    users.find({}, function (err, usersList) {
        if (err) throw err;
        else
            branches.find({}, function (err, branchesList) {
                if (err) throw err;
                else
                    res.render('partials/userManagement', {
                        users: usersList,
                        category:req.body.category,
                        branches: branchesList
                    });

    });
    });
});
router.post('/addUser', function(req, res){

    let newUser = {
        id:req.body.id,
        name:req.body.name,
        category:req.body.category,
        branchId:req.body.branchId,
        userName:req.body.userName,
        password:req.body.password,
        valid:true
    }
    users.create(newUser, function (err, user) {
        if (err) throw err;
        res.end();
    });
});



router.post('/deleteUser', function(req, res){

    let id = req.body.id;
    users.deleteOne({ id: id },function (err, updatedObject) {
        if (err) throw err;
        res.end();
    });
});


router.post('/updateUser', function(req, res){
    let id = req.body.id;
    users.updateOne({ id: id }, {
        $set: {
            name : req.body.name,
            category : req.body.category,
            branchId : req.body.branchId,
            userName : req.body.userName,
            password : req.body.password
        }
    },function (err, updatedObject) {
        if (err) throw err;
        res.end();
    });
});
module.exports = router;
