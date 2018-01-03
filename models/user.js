// implementing local passport.js in class today

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }
});

// (placing this in schema is just a better seperation of concerns):
 // using encrypt method; hashing (or encrypting?) it 8 times; saving encrypted password, not plaintext:
 User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//////

// compare passwords and if correct, and allow entry:
User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
