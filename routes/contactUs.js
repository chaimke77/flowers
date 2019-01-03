let data = require('../models/data');
let express = require('express');
let router = express.Router();

router.post('/', function(req, res){

    res.render('partials/contactUs');
});

router.post('/conactUsMessage', function(req, res){
    let name = req.body.name,
        email = req.body.email,
        phoneNumber = req.body.phoneNumber,
        message = req.body.message;
    let isEmail = true, isPhoneNumber = true;
    if(!validator.isEmail(email))
        isEmail = false;
    if(!data.IsPhoneNumber(phoneNumber))
        isPhoneNumber = false;
    res.json({isEmail:isEmail, isPhoneNumber:isPhoneNumber});
});
module.exports = router;