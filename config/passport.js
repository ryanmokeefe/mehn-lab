<<<<<<< HEAD
=======
// file for all logic related to passport.js


>>>>>>> ca9c35dbf3c7bfb478ca9643afbd11257610e894
var LocalStrategy   = require('passport-local').Strategy;
// require schema:
var User            = require('../models/user');

// export all the functions
module.exports = function(passport) {
// serialize and deserialize session authentication (must be inside module.exports):
<<<<<<< HEAD
   passport.serializeUser(function(user, callback) {
       callback(null, user.id)
     })
   
     passport.deserializeUser(function(id, callback) {
       User.findById(id, function(err, user) {
           callback(err, user)
       })
    })
   // need to use passport.use + name
//****** must match in users.js */
   passport.use('local-signup', new LocalStrategy({
     usernameField : 'email',
     passwordField : 'password',
     // tells it to pass request to another callback function:
     passReqToCallback : true
   }, function(req, email, password, callback) {
// inserted from lesson plan:

        // Find a user with this e-mail
   User.findOne({ 'local.email' :  email }, function(err, user) {
       if (err) return callback(err);
 
       // If there already is a user with this email
       if (user) {
     return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
       } else {
       // There is no email registered with this emai
     // Create a new user
     var newUser            = new User();
     newUser.local.email    = email;
     // not saving password in database - ENCRYPTING first:
     newUser.local.password = newUser.encrypt(password);
 
     newUser.save(function(err) {
       if (err) throw err;
       return callback(null, newUser);
     });
       }
     });
   }));
=======
    passport.serializeUser(function(user, callback) {
        callback(null, user.id)
      })
    
      passport.deserializeUser(function(id, callback) {
        User.findById(id, function(err, user) {
            callback(err, user)
        })
    })
    


    // need to use passport.use + name
//****** must match in users.js */
    passport.use('local-signup', new LocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      // tells it to pass request to another callback function:
      passReqToCallback : true
    }, function(req, email, password, callback) {
// inserted from lesson plan:

         // Find a user with this e-mail
    User.findOne({ 'local.email' :  email }, function(err, user) {
        if (err) return callback(err);
  
        // If there already is a user with this email
        if (user) {
      return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
        } else {
        // There is no email registered with this emai
      // Create a new user
      var newUser            = new User();
      newUser.local.email    = email;
      // not saving password in database - ENCRYPTING first:
      newUser.local.password = newUser.encrypt(password);
  
      newUser.save(function(err) {
        if (err) throw err;
        return callback(null, newUser);
      });
        }
      });
    }));
>>>>>>> ca9c35dbf3c7bfb478ca9643afbd11257610e894

/////

// create a new custom strategy for the login (also IN module.exports):
<<<<<<< HEAD
   passport.use('local-login', new LocalStrategy({
       usernameField : 'email',
       passwordField : 'password',
       passReqToCallback : true
     }, function(req, email, password, callback) {
         
/////    
        // Search for a user with this email
   User.findOne({ 'local.email' :  email }, function(err, user) {
       if (err) {
         return callback(err);
       }
 
       // If no user is found
       if (!user) {
         return callback(null, false, req.flash('loginMessage', 'No user found.'));
       }
       // Wrong password
       if (!user.validPassword(password)) {
         return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
       }
 
       return callback(null, user);
     });

     }));
};



var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

/////// Restricting Access
function authenticatedUser(req, res, next) {
 // If the user is authenticated, then we continue the execution
 if (req.isAuthenticated()) return next();

 // Otherwise the request is always redirected to the home page
 res.redirect('/');
}

////

router.route('/')
.get(staticsController.home);

router.route('/signup')
.get(usersController.getSignup)
.post(usersController.postSignup)

router.route('/login')
.get(usersController.getLogin)
.post(usersController.postLogin)

router.route("/logout")
.get(usersController.getLogout)

// adds route for secret page IF user is authenticated:
router.route("/secret")
.get(authenticatedUser, usersController.secret)

module.exports = router
=======
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
      }, function(req, email, password, callback) {
          
/////    
         // Search for a user with this email
    User.findOne({ 'local.email' :  email }, function(err, user) {
        if (err) {
          return callback(err);
        }
  
        // If no user is found
        if (!user) {
          return callback(null, false, req.flash('loginMessage', 'No user found.'));
        }
        // Wrong password
        if (!user.validPassword(password)) {
          return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
        }
  
        return callback(null, user);
      });

      }));
 };

>>>>>>> ca9c35dbf3c7bfb478ca9643afbd11257610e894
