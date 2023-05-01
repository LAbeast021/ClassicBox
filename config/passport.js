// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; ----- > THIS IS THE OLD VERSION
// var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
// MONNGOSE FUNCTIONS NO LONGER GIVE A FUNCTION BACK INSTEAD you should use .catch() or try/catch with async/await. OR PROMISES (.THE(())) => {}

var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
var FacebookStrategy = require('passport-facebook');
var User = require('../models/user');
var mongoose = require('mongoose');
const user = require('../models/user');

// LOGING IN USING GOOGLE //////////
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK,
},async function(accessToken, refreshToken, profile, cb){
   User.findOne({googleId: profile.id}).then((user) => {
        if (user) {
          // returning user
          return cb(null, user);
        } else {
          // we have a new user via OAuth!
          var newUser = new User({
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            googleId: profile.id
           });
          newUser.save(newUser).then((user) => {
            return cb(null, user);
          })
        }
    })
    }));
    // LOGING IN USING FACEBOOK //////////
    // passport.use(new FacebookStrategy({
    //   clientID: FACEBOOK_APP_ID,
    //   clientSecret: FACEBOOK_APP_SECRET,
    //   callbackURL: "http://localhost:3000/authcallback",
    //   enableProof: true, 
    //   profileFields: ['id', 'displayName', 'photos', 'email']
    // }))

    
    // ////////  NOT SURE WHAT IT DOES BUT I THINK THEY SET THE USER KEY IN REQ OBJECT ////////////// 
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id).then((user) => {
      done(null, user);
    });
  });
   