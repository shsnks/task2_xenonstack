const mongoose = require("mongoose");

const Schema = mongoose.Schema;



var userSchema = new Schema({
    Name: String,
    Email: String,
    Username: String,
    Password: String
});

module.exports = {
    userSchema
  };