var express = require('express');
var router = express.Router();
var User = require('../models/user');
var usersCtrl = require('../controllers/users');


router.get('/profile/:id' , function(req,res,next) {
    console.log(req.params);
    res.send(`Salam ${req.user.firstName}`);
})
module.exports = router;