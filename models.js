var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = mongoose.Schema({
  token : String,
  email: String,   //delivery boys won't have email ids but a username made from their name initials , birthdate etc
  hashed_password: String,
  salt : String,
  temp_str:String,
  first_name: String,
  last_name: String,
  hub_address: String,
  contact_number: String

});



mongoose.connect('mongodb://localhost:27017/node-android');
module.exports = mongoose.model('users', userSchema);