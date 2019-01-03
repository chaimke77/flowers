let data = require('../models/data');
let users = require('../models/users');
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    let sendLinks = [];
    sendLinks.push(data.links[3]);
    sendLinks.push(data.links[4]);
    res.render('home',{links:sendLinks});
});



router.post('/login', function(req, res)
{
    let userName = req.body.userName;
    let password = req.body.password;
    let userExist = false;
    let isManager = 0;
    let sendLinks = [];


    users.find({}, function (err, usersList) {
        if (err) throw err;
        else {
            usersList.forEach(function(user){
            if (user.userName == userName && user.password == password && user.valid == true) {
                if (user.category === data.Category.MANAGER)
                    isManager = 1;
                userExist = true;
                sendLinks = data.showLinks(user.category);
                return;

            }
        });
            res.json({userExist: userExist, links: sendLinks, isManager: isManager});
        }
    });
});






module.exports = router;
