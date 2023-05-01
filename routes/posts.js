var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Post = require('../models/post')
var multer = require('multer');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
// var storage = cloudinaryStorage({
//     cloudinary, 
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname );
//       },
//     allowedFormats: ["jpg", "jpeg", "png"],
// });
// var upload = multer({storage})
// var postsCtrl = require('../controllers/posts');


module.exports = router;