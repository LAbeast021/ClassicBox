var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
    comment:String,
    visitorId: String,
    visitorAvatar: String,
    visitorName: String
},{
    timestamps:true
})

var postSchema = new Schema({
    image: String,
    ratin: Number,
    ratinArray: [ratingSchema],
    likes:[],
    caption: String,
    userId: String,
    username: String,
    userAvatar: String,
    comments:[commentSchema]

},{
    timestamps:true
})


module.exports = mongoose.model('Post',postSchema);