var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');




router.get('/', (req, res) => {
        console.log("here at router get home 1 ");
        // // let posts = await Post.find({ $query: {}, $orderby: { createdAt : -1 } })
        // Post.find({ $query: {}, $orderby: { createdAt : -1 } }).then((posts) => {
        //     console.log(posts);
        // })
        // // Post.find({}).sort({'created_at': -1})(function(err,posts){
        //   if (posts) {
        //       res.render('home',{
        //         posts:posts.reverse(),
        //         loggedInUser: req.user,
        //         title: 'Home'
        //     })
        //   }  
        //   else {
        //     res.redirect('https://www.google.com/')
        //   }
        // })
        res.send('dorostesh kardi :)');
    });

// function isLoggedIn(req, res,next){
//     console.log("we are here 1");
//     if(req.isAuthenticated()){
//         console.log("we are here 2");
//       return next();}
//     res.redirect('/auth/google')
// }


module.exports = router;