const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  UserName: String,
  Password: String,
  Email: String,
  picture: String,
  role: String,
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
